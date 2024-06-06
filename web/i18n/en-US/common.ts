const translation = {
  api: {
    success: 'Success',
    actionSuccess: 'Action succeeded',
    saved: 'Saved',
    create: 'Created',
    remove: 'Removed',
  },
  operation: {
    create: 'Create',
    confirm: 'Confirm',
    cancel: 'Cancel',
    clear: 'Clear',
    save: 'Save',
    edit: 'Edit',
    add: 'Add',
    added: 'Added',
    refresh: 'Restart',
    reset: 'Reset',
    search: 'Search',
    change: 'Change',
    remove: 'Remove',
    send: 'Send',
    copy: 'Copy',
    lineBreak: 'Line break',
    sure: 'I\'m sure',
    download: 'Download',
    delete: 'Delete',
    settings: 'Settings',
    setup: 'Setup',
    getForFree: 'Get for free',
    reload: 'Reload',
    ok: 'OK',
    log: 'Log',
    learnMore: 'Learn More',
    params: 'Params',
    duplicate: 'Duplicate',
    rename: 'Rename',
  },
  errorMsg: {
    fieldRequired: '{{field}} is required',
    urlError: 'url should start with http:// or https://',
  },
  placeholder: {
    input: 'Please enter',
    select: 'Please select',
  },
  voice: {
    language: {
      zhHans: 'Chinese',
      zhHant: 'Traditional Chinese',
      enUS: 'English',
      deDE: 'German',
      frFR: 'French',
      esES: 'Spanish',
      itIT: 'Italian',
      thTH: 'Thai.',
      idID: 'Indonesian',
      jaJP: 'Japanese',
      koKR: 'Korean',
      ptBR: 'Portuguese',
      ruRU: 'Russian',
      ukUA: 'Ukrainian',
      viVN: 'Vietnamese',
      plPL: 'Polish',
    },
  },
  unit: {
    char: 'chars',
  },
  actionMsg: {
    noModification: 'No modifications at the moment.',
    modifiedSuccessfully: 'Modified successfully',
    modifiedUnsuccessfully: 'Modified unsuccessfully',
    copySuccessfully: 'Copied successfully',
    paySucceeded: 'Payment succeeded',
    payCancelled: 'Payment cancelled',
    generatedSuccessfully: 'Generated successfully',
    generatedUnsuccessfully: 'Generated unsuccessfully',
  },
  model: {
    params: {
      temperature: 'Temperature',
      temperatureTip:
        'Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.',
      top_p: 'Top P',
      top_pTip:
        'Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered.',
      presence_penalty: 'Presence penalty',
      presence_penaltyTip:
        'How much to penalize new tokens based on whether they appear in the text so far.\nIncreases the model\'s likelihood to talk about new topics.',
      frequency_penalty: 'Frequency penalty',
      frequency_penaltyTip:
        'How much to penalize new tokens based on their existing frequency in the text so far.\nDecreases the model\'s likelihood to repeat the same line verbatim.',
      max_tokens: 'Max token',
      max_tokensTip:
        'Used to limit the maximum length of the reply, in tokens. \nLarger values may limit the space left for prompt words, chat logs, and Knowledge. \nIt is recommended to set it below two-thirds\ngpt-4-1106-preview, gpt-4-vision-preview max token (input 128k output 4k)',
      maxTokenSettingTip: 'Your max token setting is high, potentially limiting space for prompts, queries, and data. Consider setting it below 2/3.',
      setToCurrentModelMaxTokenTip: 'Max token is updated to the 80% maximum token of the current model {{maxToken}}.',
      stop_sequences: 'Stop sequences',
      stop_sequencesTip: 'Up to four sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.',
      stop_sequencesPlaceholder: 'Enter sequence and press Tab',
    },
    tone: {
      Creative: 'Creative',
      Balanced: 'Balanced',
      Precise: 'Precise',
      Custom: 'Custom',
    },
    addMoreModel: 'Go to settings to add more models',
  },
  menus: {
    status: 'beta',
    explore: 'Explore',
    apps: 'Studio',
    plugins: 'Plugins',
    pluginsTips: 'Integrate third-party plugins or create ChatGPT-compatible AI-Plugins.',
    datasets: 'Knowledge',
    datasetsTips: 'COMING SOON: Import your own text data or write data in real-time via Webhook for LLM context enhancement.',
    newApp: 'New App',
    newDataset: 'Create Knowledge',
    tools: 'Tools',
  },
  userProfile: {
    settings: 'Settings',
    workspace: 'Workspace',
    createWorkspace: 'Create Workspace',
    helpCenter: 'Help',
    roadmapAndFeedback: 'Feedback',
    community: 'Community',
    about: 'About',
    logout: 'Log out',
  },
  settings: {
    accountGroup: 'ACCOUNT',
    workplaceGroup: 'WORKSPACE',
    account: 'My account',
    members: 'Members',
    billing: 'Billing',
    integrations: 'Integrations',
    language: 'Language',
    provider: 'Model Provider',
    dataSource: 'Data Source',
    plugin: 'Plugins',
    apiBasedExtension: 'API Extension',
  },
  account: {
    avatar: 'Avatar',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    passwordTip: 'You can set a permanent password if you don’t want to use temporary login codes',
    setPassword: 'Set a password',
    resetPassword: 'Reset password',
    currentPassword: 'Current password',
    newPassword: 'New password',
    confirmPassword: 'Confirm password',
    notEqual: 'Two passwords are different.',
    langGeniusAccount: 'Dify account',
    langGeniusAccountTip: 'Your Dify account and associated user data.',
    editName: 'Edit Name',
    showAppLength: 'Show {{length}} apps',
  },
  members: {
    team: 'Team',
    invite: 'Add',
    name: 'NAME',
    lastActive: 'LAST ACTIVE',
    role: 'ROLES',
    pending: 'Pending...',
    owner: 'Owner',
    admin: 'Admin',
    adminTip: 'Can build apps & manage team settings',
    normal: 'Normal',
    normalTip: 'Only can use apps, can not build apps',
    inviteTeamMember: 'Add team member',
    inviteTeamMemberTip: 'They can access your team data directly after signing in.',
    email: 'Email',
    emailInvalid: 'Invalid Email Format',
    emailPlaceholder: 'Please input emails',
    sendInvite: 'Send Invite',
    invitedAsRole: 'Invited as {{role}} user',
    invitationSent: 'Invitation sent',
    invitationSentTip: 'Invitation sent, and they can sign in to Dify to access your team data.',
    invitationLink: 'Invitation Link',
    failedinvitationEmails: 'Below users were not invited successfully',
    ok: 'OK',
    removeFromTeam: 'Remove from team',
    removeFromTeamTip: 'Will remove team access',
    setAdmin: 'Set as administrator',
    setMember: 'Set to ordinary member',
    disinvite: 'Cancel the invitation',
    deleteMember: 'Delete Member',
    you: '(You)',
  },
  integrations: {
    connected: 'Connected',
    google: 'Google',
    googleAccount: 'Login with Google account',
    github: 'GitHub',
    githubAccount: 'Login with GitHub account',
    connect: 'Connect',
  },
  language: {
    displayLanguage: 'Display Language',
    timezone: 'Time Zone',
  },
  provider: {
    apiKey: 'API Key',
    enterYourKey: 'Enter your API key here',
    invalidKey: 'Invalid OpenAI API key',
    validatedError: 'Validation failed: ',
    validating: 'Validating key...',
    saveFailed: 'Save api key failed',
    apiKeyExceedBill: 'This API KEY has no quota available, please read',
    addKey: 'Add Key',
    comingSoon: 'Coming Soon',
    editKey: 'Edit',
    invalidApiKey: 'Invalid API key',
    azure: {
      apiBase: 'API Base',
      apiBasePlaceholder: 'The API Base URL of your Azure OpenAI Endpoint.',
      apiKey: 'API Key',
      apiKeyPlaceholder: 'Enter your API key here',
      helpTip: 'Learn Azure OpenAI Service',
    },
    openaiHosted: {
      openaiHosted: 'Hosted OpenAI',
      onTrial: 'ON TRIAL',
      exhausted: 'QUOTA EXHAUSTED',
      desc: 'The OpenAI hosting service provided by Dify allows you to use models such as GPT-3.5. Before your trial quota is used up, you need to set up other model providers.',
      callTimes: 'Call times',
      usedUp: 'Trial quota used up. Add own Model Provider.',
      useYourModel: 'Currently using own Model Provider.',
      close: 'Close',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: 'ON TRIAL',
      exhausted: 'QUOTA EXHAUSTED',
      desc: 'Powerful model, which excels at a wide range of tasks from sophisticated dialogue and creative content generation to detailed instruction.',
      callTimes: 'Call times',
      usedUp: 'Trial quota used up. Add own Model Provider.',
      useYourModel: 'Currently using own Model Provider.',
      close: 'Close',
    },
    anthropic: {
      using: 'The embedding capability is using',
      enableTip: 'To enable the Anthropic model, you need to bind to OpenAI or Azure OpenAI Service first.',
      notEnabled: 'Not enabled',
      keyFrom: 'Get your API key from Anthropic',
    },
    encrypted: {
      front: 'Your API KEY will be encrypted and stored using',
      back: ' technology.',
    },
  },
  modelProvider: {
    notConfigured: 'The system model has not yet been fully configured, and some functions may be unavailable.',
    systemModelSettings: 'System Model Settings',
    systemModelSettingsLink: 'Why is it necessary to set up a system model?',
    selectModel: 'Select your model',
    setupModelFirst: 'Please set up your model first',
    systemReasoningModel: {
      key: 'System Reasoning Model',
      tip: 'Set the default inference model to be used for creating applications, as well as features such as dialogue name generation and next question suggestion will also use the default inference model.',
    },
    embeddingModel: {
      key: 'Embedding Model',
      tip: 'Set the default model for document embedding processing of the Knowledge, both retrieval and import of the Knowledge use this Embedding model for vectorization processing. Switching will cause the vector dimension between the imported Knowledge and the question to be inconsistent, resulting in retrieval failure. To avoid retrieval failure, please do not switch this model at will.',
      required: 'Embedding Model is required',
    },
    speechToTextModel: {
      key: 'Speech-to-Text Model',
      tip: 'Set the default model for speech-to-text input in conversation.',
    },
    ttsModel: {
      key: 'Text-to-Speech Model',
      tip: 'Set the default model for text-to-speech input in conversation.',
    },
    rerankModel: {
      key: 'Rerank Model',
      tip: 'Rerank model will reorder the candidate document list based on the semantic match with  user query, improving the results of semantic ranking',
    },
    apiKey: 'API-KEY',
    quota: 'Quota',
    searchModel: 'Search model',
    noModelFound: 'No model found for {{model}}',
    models: 'Models',
    showMoreModelProvider: 'Show more model provider',
    selector: {
      tip: 'This model has been removed. Please add a model or select another model.',
      emptyTip: 'No available models',
      emptySetting: 'Please go to settings to configure',
      rerankTip: 'Please set up the Rerank model',
    },
    card: {
      quota: 'QUOTA',
      onTrial: 'On Trial',
      paid: 'Paid',
      quotaExhausted: 'Quota exhausted',
      callTimes: 'Call times',
      tokens: 'Tokens',
      buyQuota: 'Buy Quota',
      priorityUse: 'Priority use',
      removeKey: 'Remove API Key',
      tip: 'Priority will be given to the paid quota. The Trial quota will be used after the paid quota is exhausted.',
    },
    item: {
      deleteDesc: '{{modelName}} are being used as system reasoning models. Some functions will not be available after removal. Please confirm.',
      freeQuota: 'FREE QUOTA',
    },
    addApiKey: 'Add your API key',
    invalidApiKey: 'Invalid API key',
    encrypted: {
      front: 'Your API KEY will be encrypted and stored using',
      back: ' technology.',
    },
    freeQuota: {
      howToEarn: 'How to earn',
    },
    addMoreModelProvider: 'ADD MORE MODEL PROVIDER',
    addModel: 'Add Model',
    modelsNum: '{{num}} Models',
    showModels: 'Show Models',
    showModelsNum: 'Show {{num}} Models',
    collapse: 'Collapse',
    config: 'Config',
    modelAndParameters: 'Model and Parameters',
    model: 'Model',
    featureSupported: '{{feature}} supported',
    callTimes: 'Call times',
    credits: 'Message Credits',
    buyQuota: 'Buy Quota',
    getFreeTokens: 'Get free Tokens',
    priorityUsing: 'Prioritize using',
    deprecated: 'Deprecated',
    confirmDelete: 'confirm deletion?',
    quotaTip: 'Remaining available free tokens',
    loadPresets: 'Load Presents',
    parameters: 'PARAMETERS',
    loadBalancing: 'Load balancing',
    loadBalancingDescription: 'Reduce pressure with multiple sets of credentials.',
    loadBalancingHeadline: 'Load Balancing',
    configLoadBalancing: 'Config Load Balancing',
    modelHasBeenDeprecated: 'This model has been deprecated',
    providerManaged: 'Provider managed',
    providerManagedDescription: 'Use the single set of credentials provided by the model provider.',
    defaultConfig: 'Default Config',
    apiKeyStatusNormal: 'APIKey status is normal',
    apiKeyRateLimit: 'Rate limit was reached, available after {{seconds}}s',
    addConfig: 'Add Config',
    editConfig: 'Edit Config',
    loadBalancingLeastKeyWarning: 'To enable load balancing at least 2 keys must be enabled.',
    loadBalancingInfo: 'By default, load balancing uses the Round-robin strategy. If rate limiting is triggered, a 1-minute cooldown period will be applied.',
    upgradeForLoadBalancing: 'Upgrade your plan to enable Load Balancing.',
  },
  dataSource: {
    add: 'Add a data source',
    connect: 'Connect',
    configure: 'Configure',
    notion: {
      title: 'Notion',
      description: 'Using Notion as a data source for the Knowledge.',
      connectedWorkspace: 'Connected workspace',
      addWorkspace: 'Add workspace',
      connected: 'Connected',
      disconnected: 'Disconnected',
      changeAuthorizedPages: 'Change authorized pages',
      pagesAuthorized: 'Pages authorized',
      sync: 'Sync',
      remove: 'Remove',
      selector: {
        pageSelected: 'Pages Selected',
        searchPages: 'Search pages...',
        noSearchResult: 'No search resluts',
        addPages: 'Add pages',
        preview: 'PREVIEW',
      },
    },
    website: {
      title: 'Website',
      description: 'Import content from websites using web crawler.',
      with: 'With',
      configuredCrawlers: 'Configured crawlers',
      active: 'Active',
      inactive: 'Inactive',
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'API Key',
      apiKeyPlaceholder: 'Enter your API key',
      keyFrom: 'Get your SerpAPI key from SerpAPI Account Page',
    },
  },
  apiBasedExtension: {
    title: 'API extensions provide centralized API management, simplifying configuration for easy use across Dify\'s applications.',
    link: 'Learn how to develop your own API Extension.',
    linkUrl: 'https://docs.dify.ai/features/extension/api_based_extension',
    add: 'Add API Extension',
    selector: {
      title: 'API Extension',
      placeholder: 'Please select API extension',
      manage: 'Manage API Extension',
    },
    modal: {
      title: 'Add API Extension',
      editTitle: 'Edit API Extension',
      name: {
        title: 'Name',
        placeholder: 'Please enter the name',
      },
      apiEndpoint: {
        title: 'API Endpoint',
        placeholder: 'Please enter the API endpoint',
      },
      apiKey: {
        title: 'API-key',
        placeholder: 'Please enter the API-key',
        lengthError: 'API-key length cannot be less than 5 characters',
      },
    },
    type: 'Type',
  },
  about: {
    changeLog: 'Changelog',
    updateNow: 'Update now',
    nowAvailable: 'Dify {{version}} is now available.',
    latestAvailable: 'Dify {{version}} is the latest version available.',
  },
  appMenus: {
    overview: 'Overview',
    promptEng: 'Orchestrate',
    apiAccess: 'API Access',
    logAndAnn: 'Logs & Ann.',
    logs: 'Logs',
  },
  environment: {
    testing: 'TESTING',
    development: 'DEVELOPMENT',
  },
  appModes: {
    completionApp: 'Text Generator',
    chatApp: 'Chat App',
  },
  datasetMenus: {
    documents: 'Documents',
    hitTesting: 'Retrieval Testing',
    settings: 'Settings',
    emptyTip: 'The Knowledge has not been associated, please go to the application or plug-in to complete the association.',
    viewDoc: 'View documentation',
    relatedApp: 'linked apps',
  },
  voiceInput: {
    speaking: 'Speak now...',
    converting: 'Converting to text...',
    notAllow: 'microphone not authorized',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Text-Davinci-003',
    'text-embedding-ada-002': 'Text-Embedding-Ada-002',
    'whisper-1': 'Whisper-1',
    'claude-instant-1': 'Claude-Instant',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: 'Rename Conversation',
    conversationName: 'Conversation name',
    conversationNamePlaceholder: 'Please input conversation name',
    conversationNameCanNotEmpty: 'Conversation name required',
    citation: {
      title: 'CITATIONS',
      linkToDataset: 'Link to Knowledge',
      characters: 'Characters:',
      hitCount: 'Retrieval count:',
      vectorHash: 'Vector hash:',
      hitScore: 'Retrieval Score:',
    },
  },
  promptEditor: {
    placeholder: 'Write your prompt word here, enter \'{\' to insert a variable, enter \'/\' to insert a prompt content block',
    context: {
      item: {
        title: 'Context',
        desc: 'Insert context template',
      },
      modal: {
        title: '{{num}} Knowledge in Context',
        add: 'Add Context ',
        footer: 'You can manage contexts in the Context section below.',
      },
    },
    history: {
      item: {
        title: 'Conversation History',
        desc: 'Insert historical message template',
      },
      modal: {
        title: 'EXAMPLE',
        user: 'Hello',
        assistant: 'Hello! How can I assist you today?',
        edit: 'Edit Conversation Role Names',
      },
    },
    variable: {
      item: {
        title: 'Variables & External Tools',
        desc: 'Insert Variables & External Tools',
      },
      outputToolDisabledItem: {
        title: 'Variables',
        desc: 'Insert Variables',
      },
      modal: {
        add: 'New variable',
        addTool: 'New tool',
      },
    },
    query: {
      item: {
        title: 'Query',
        desc: 'Insert user query template',
      },
    },
    existed: 'Already exists in the prompt',
  },
  imageUploader: {
    uploadFromComputer: 'Upload from Computer',
    uploadFromComputerReadError: 'Image reading failed, please try again.',
    uploadFromComputerUploadError: 'Image upload failed, please upload again.',
    uploadFromComputerLimit: 'Upload images cannot exceed {{size}} MB',
    pasteImageLink: 'Paste image link',
    pasteImageLinkInputPlaceholder: 'Paste image link here',
    pasteImageLinkInvalid: 'Invalid image link',
    imageUpload: 'Image Upload',
  },
  tag: {
    placeholder: 'All Tags',
    addNew: 'Add new tag',
    noTag: 'No tags',
    noTagYet: 'No tags yet',
    addTag: 'Add tags',
    editTag: 'Edit tags',
    manageTags: 'Manage Tags',
    selectorPlaceholder: 'Type to search or create',
    create: 'Create',
    delete: 'Delete tag',
    deleteTip: 'The tag is being used, delete it?',
    created: 'Tag created successfully',
    failed: 'Tag creation failed',
  },
}

export default translation
