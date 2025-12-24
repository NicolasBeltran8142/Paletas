const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const contentDir = path.join(__dirname, '../content/paletas');
const outputFile = path.join(__dirname, '../paletas.json');

function generateJson() {
    try {
        if (!fs.existsSync(contentDir)) {
            console.error('Directory not found:', contentDir);
            return;
        }

        const files = fs.readdirSync(contentDir);
        const paletas = [];

        files.forEach(file => {
            if (path.extname(file) === '.md') {
                const filePath = path.join(contentDir, file);
                const fileContent = fs.readFileSync(filePath, 'utf8');
                
                // Extract frontmatter
                const match = fileContent.match(/^---\n([\s\S]*?)\n---/);
                if (match) {
                    try {
                        const frontmatter = yaml.load(match[1]);
                        // Add slug based on filename
                        frontmatter.slug = path.basename(file, '.md');
                        paletas.push(frontmatter);
                    } catch (e) {
                        console.error(`Error parsing YAML in ${file}:`, e);
                    }
                }
            }
        });

        fs.writeFileSync(outputFile, JSON.stringify(paletas, null, 2));
        console.log(`Successfully generated paletas.json with ${paletas.length} items.`);
    } catch (error) {
        console.error('Error generating JSON:', error);
    }
}

generateJson();

// Simple watch implementation if --watch flag is passed
if (process.argv.includes('--watch')) {
    console.log('Watching for changes...');
    fs.watch(contentDir, (eventType, filename) => {
        if (filename && filename.endsWith('.md')) {
            console.log(`File ${filename} changed. Regenerating...`);
            generateJson();
        }
    });
}
