import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ctf-flagfrenzy.github.io',
  base: '/',  // Explicitly set the base path
  integrations: [
    starlight({
      title: 'CTF-FlagFrenzy',
      customCss: [
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/CTF-FlagFrenzy',
      },
      expressiveCode: {
        languageAlias: {
          'nginxconf': 'nginx'
        }
      },
			sidebar: [
				{
					label: 'Getting Started', link: '/overview'
				},
				{
					label: 'Infrastructure',
          items: [
            { label: 'Infrastructure | Overview', link: '/infrastructure/overview' },
            { 
              label: 'Registry',
              items: [
                { label: 'Registry | Overview', link: '/infrastructure/registry/overview' },
                { label: 'Registry | Setup', link: '/infrastructure/registry/setup' },
                { label: 'Registry | Usage', link: '/infrastructure/registry/usage' },
                { label: 'Registry | Troubleshooting', link: '/infrastructure/registry/troubleshooting' },
              ]
            },
            {
              label: 'Cluster',
              items: [
                { label: 'Cluster | Overview', link: '/infrastructure/cluster/overview' },
                { label: 'Cluster | Initial Setup', link: '/infrastructure/cluster/init' },
                { label: 'Cluster | Using Podman on Loadbalancer', link: '/infrastructure/cluster/podman-on-lb' },
                { label: 'Cluster | Webapp Interaction', link: '/infrastructure/cluster/webapp-interaction' },
                { label: 'Cluster | Challenge Deployment', link: '/infrastructure/cluster/challenge-deployment' },
                { label: 'Cluster | FastAPI Endpoints', link: '/infrastructure/cluster/fastapi-endpoints' },
                { label: 'Cluster | Traffic Routing', link: '/infrastructure/cluster/traffic-routing' },
                { label: 'Cluster | Dashboard', link: '/infrastructure/cluster/dashboard' },
                { label: 'Cluster | Internal Registry', link: '/infrastructure/cluster/internal-registry' },
                { label: 'Cluster | Secrets', link: '/infrastructure/cluster/secrets' },
                { label: 'Cluster | Troubleshooting', link: '/infrastructure/cluster/troubleshooting' },
              ]
            },
          ],
				},
				{
					label: 'Webapp',
					items: [
            { label: 'Webapp | Overview', link: '/webapp/overview' },
            { 
              label: 'Frontend',
              items: [
                { label: 'Frontend | Overview', link: '/webapp/frontend/overview' },
              ]
            },
            {
              label: 'Backend',
              items: [
                { label: 'Backend | Overview', link: '/webapp/backend/overview' },
              ]
            },
            {
              label: 'Anti Cheat',
              items: [
                { label: 'Anti Cheat | Overview', link: '/webapp/anti-cheat/overview' },
              ]
            },
					],
				},
        {
					label: 'Challenges',
					items: [
            { label: 'Challenges | Overview', link: '/challenge/overview' },
            { 
              label: 'Web Challenge',
              items: [
                { label: 'Solana Assets', link: '/challenge/web-challenge/solana-assets' },
                { label: 'The SQL Heist', link: '/challenge/web-challenge/the-sql-heist' },
                { label: 'File And Seek', link: '/challenge/web-challenge/file-and-seek' },
                { label: 'Shadow File', link: '/challenge/web-challenge/shadow-file' },
              ]
            },
            {
              label: 'Others',
              items: [
                { label: 'Security Maths', link: '/challenge/others/security-maths' },
                { label: 'Hidden Job', link: '/challenge/others/hidden-job' },
                { label: 'Decryption Master', link: '/challenge/others/decryption-master' },
                { label: 'The Neverending Zip', link: '/challenge/others/the-neverending-zip' },
                { label: 'Solana Dumb Contract', link: '/challenge/others/solana-dumb-contract' }, 
              ]
            },
            {
              label: 'Cryptography',
              items: [
                { label: 'Ceasar Cypher', link: '/challenge/cryptography/ceasar-cypher' },
                { label: 'Binary Puzzeling', link: '/challenge/cryptography/binary-puzzeling' },
                { label: 'Checking Encryption', link: '/challenge/cryptography/checking-encryption' },
              ]
            },
            {
              label: 'Reversing',
              items: [
                { label: 'Confused Scripting', link: '/challenge/reversing/confused-scripting' },
                { label: 'Mental Overflow', link: '/challenge/reversing/mental-overflow' },
                { label: 'Shell Assembly', link: '/challenge/reversing/shell-assembly' },
                { label: 'Corrupted File', link: '/challenge/reversing/corrupted-file' },
                { label: 'PYCked Apart', link: '/challenge/reversing/pycked-apart' },
              ]
            },
            {
              label: 'Forensics',
              items: [
                { label: 'Pixel Spy', link: '/challenge/forensics/pixel-spy' },
                { label: 'Behind The Pixels', link: '/challenge/forensics/behind-the-pixels' },
                { label: 'Stealth Invoice', link: '/challenge/forensics/stealth-invoice' },
                { label: 'Transmission Received', link: '/challenge/forensics/transmission-received' },
                { label: 'Phantom Frequency', link: '/challenge/forensics/phantom-frequency' },
              ]
            },
            {
              label: 'Steganography',
              items: [
                { label: 'Hidden Frequencies', link: '/challenge/steganography/hidden-frequencies' },
              ]
            },
            {
              label: 'OSINT',
              items: [
                { label: 'Profile Prodigy', link: '/challenge/osint/profile-prodigy' },
                { label: 'Time Travelers Hunt', link: '/challenge/osint/time-travelers-hunt' },
                { label: 'Git Secrets', link: '/challenge/osint/git-secrets' },
              ]
            },
          ],
				},
				{
					label: 'About', link: '/about'
				},
			],
		}),
	],
});