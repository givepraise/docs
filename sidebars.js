/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'doc',
      label: 'What is Praise?',
      id: 'index', 
    },    
    {
      type: 'category',
      label: 'How Praise works',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'how-praise-works/praise',
        'how-praise-works/quantify',
        'how-praise-works/analyze',
        'how-praise-works/reward',
      ],
    },
    {
      type: 'doc',
      label: 'Getting started', 
      id: 'getting-started', 
    },    
    {
      type: 'category',
      label: 'Run Praise on a server',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'server-setup/index',
        'server-setup/setup-firewall-and-user',
        'server-setup/configure-ufw-for-docker',
        'server-setup/create-discord-bot',
        'server-setup/upgrade-praise',
        'server-setup/server-scripts'
      ],
    },
    {
      type: 'doc',
      label: 'Run Praise locally', 
      id: 'local-setup/index', 
    },    
    {
      type: 'category',
      label: 'Configuring Praise',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'configuring/application',
        'configuring/period-defaults',
        'configuring/discord-bot',
      ],
    },
    {
      type: 'doc',
      label: 'Using Praise', 
      id: 'using-praise', 
    },    
    {
      type: 'doc',
      label: 'Writing excellent Praise', 
      id: 'writing-excellent-praise', 
    },    
    {
      type: 'doc',
      label: 'Glossary', 
      id: 'glossary', 
    },    
    {
      type: 'doc',
      label: 'FAQ', 
      id: 'faq', 
    },    
  ],
};

module.exports = sidebars;
