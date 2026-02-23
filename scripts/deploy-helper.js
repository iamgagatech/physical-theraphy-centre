#!/usr/bin/env node

/**
 * Deployment Helper Script
 * 
 * This script helps non-technical users deploy the website to GitHub Pages.
 * It sets up the repository, configures the base path, and triggers deployment.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('🚀 Physical Therapy Centre - Deployment Helper\n');
  console.log('This script will help you deploy the website to GitHub Pages.\n');

  // Check if git is initialized
  if (!fs.existsSync(path.join(process.cwd(), '.git'))) {
    console.log('📦 Initializing Git repository...');
    execSync('git init', { stdio: 'inherit' });
    execSync('git add .', { stdio: 'inherit' });
    execSync('git commit -m "Initial commit"', { stdio: 'inherit' });
    execSync('git branch -M main', { stdio: 'inherit' });
  }

  // Get GitHub username
  const username = await question('Enter your GitHub username: ');
  const repoName = await question('Enter your repository name (e.g., physical-therapy-centre): ');

  // Update vite.config.ts base path
  console.log('\n⚙️  Configuring vite.config.ts...');
  const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
  let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
  
  // Replace the base path
  viteConfig = viteConfig.replace(
    "const isGitHubPages = process.env.GITHUB_PAGES === 'true';",
    "const isGitHubPages = process.env.GITHUB_PAGES === 'true' || true;"
  );
  viteConfig = viteConfig.replace(
    /base: isGitHubPages \? '\/[^']*\/' : '\/'/,
    `base: isGitHubPages ? '/${repoName}/' : '/'`
  );
  
  fs.writeFileSync(viteConfigPath, viteConfig);
  console.log('✅ Updated vite.config.ts');

  // Update 404.html base path
  console.log('\n⚙️  Configuring 404.html...');
  const notFoundPath = path.join(process.cwd(), 'public', '404.html');
  let notFoundHtml = fs.readFileSync(notFoundPath, 'utf8');
  
  notFoundHtml = notFoundHtml.replace(
    "var pathPrefix = '/physical-therapy-centre/';",
    `var pathPrefix = '/${repoName}/';`
  );
  
  fs.writeFileSync(notFoundPath, notFoundHtml);
  console.log('✅ Updated 404.html');

  // Git setup
  console.log('\n📤 Pushing to GitHub...');
  try {
    execSync(`git remote get-url origin`, { stdio: 'ignore' });
    console.log('Remote already exists. Updating...');
  } catch {
    execSync(`git remote add origin https://github.com/${username}/${repoName}.git`, { stdio: 'inherit' });
  }

  execSync('git add .', { stdio: 'ignore' });
  execSync('git commit -m "Configure deployment"', { stdio: 'ignore' });
  execSync('git push -u origin main', { stdio: 'inherit' });

  console.log('\n✅ Code pushed to GitHub!');
  console.log('\n📋 Next steps:');
  console.log('1. Go to: https://github.com/' + username + '/' + repoName + '/settings/pages');
  console.log('2. Under "Source", select "GitHub Actions"');
  console.log('3. Go to: https://github.com/' + username + '/' + repoName + '/settings/secrets/actions');
  console.log('4. Add these secrets:');
  console.log('   - VITE_EMAILJS_SERVICE_ID');
  console.log('   - VITE_EMAILJS_TEMPLATE_ID');
  console.log('   - VITE_EMAILJS_PUBLIC_KEY');
  console.log('\n5. Your site will be available at:');
  console.log('   https://' + username + '.github.io/' + repoName + '/');
  console.log('\n🎉 Deployment complete!');

  rl.close();
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  rl.close();
  process.exit(1);
});
