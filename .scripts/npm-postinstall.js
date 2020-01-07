const {execSync} = require('child_process');

console.log('Running npm-postinstall.js of [' + process.platform + ']');

if (process.platform === 'win32') {
	execSync('copy node_modules\\katex\\dist\\katex.min.css app\\katex');
	try {
		execSync('mkdir public\\fonts');
	} catch (e) {
		console.warn('dir is exist');
	}
	execSync('copy node_modules\\katex\\dist\\fonts public\\fonts');
	execSync('copy node_modules\\pdfjs-dist\\build\\pdf.worker.min.js public');
	//execSync('cp node_modules/katex/dist/katex.min.css app/katex/');
	//execSync('mkdir -p public/fonts/');
	//execSync('cp node_modules/katex/dist/fonts/* public/fonts/');
	//execSync('cp node_modules/pdfjs-dist/build/pdf.worker.min.js public/');
} else {
	execSync('cp node_modules/katex/dist/katex.min.css app/katex/');
	execSync('mkdir -p public/fonts/');
	execSync('cp node_modules/katex/dist/fonts/* public/fonts/');
	execSync('cp node_modules/pdfjs-dist/build/pdf.worker.min.js public/');
}
