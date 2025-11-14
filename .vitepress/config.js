import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// Function to get archive files dynamically
function getArchiveItems() {
  const archivesDir = path.join(process.cwd(), 'archives')
  
  // Check if archives directory exists
  if (!fs.existsSync(archivesDir)) {
    return []
  }
  
  // Get all markdown files in archives directory
  const files = fs.readdirSync(archivesDir)
    .filter(file => file.endsWith('.md') && file !== 'index.md')
    .map(file => {
      const name = file.replace('.md', '')
      // Convert filename to readable title (e.g., '2024-january' -> '2024 January')
      const title = name.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
      
      return {
        text: title,
        link: `/archives/${name}`
      }
    })
    .sort((a, b) => b.text.localeCompare(a.text)) // Sort in reverse chronological order
  
  return files
}

export default defineConfig({
  title: 'Hypercore One Newsletter',
  description: 'Newsletters from Hypercore One',
  base: '/newsletter/',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Newsletter',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'November 24, 2025', link: '/november-24-2025' }
          { text: 'November 7, 2025', link: '/november-7-2025' }
        ]
      },
      ...(getArchiveItems().length > 0 ? [{
        text: 'Archives',
        items: getArchiveItems()
      }] : [])
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hypercore-one/newsletter' }
    ],

    search: {
      provider: 'local'
    }
  }
})
