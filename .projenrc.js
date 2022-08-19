const { awscdk, javascript } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '2.38.1',
  defaultReleaseBranch: 'master',
  name: '@renovosolutions/cdk-library-control-tower-lifecycle-events',
  description: 'An AWS CDK library that provides event patterns that match common Control Tower lifecycle events.',
  repositoryUrl: 'https://github.com/RenovoSolutions/cdk-library-control-tower-lifecycle-events.git',
  keywords: [
    'cloudwatch-events',
    'cloudwatch',
    'control-tower',
    'control-tower-lifecycle-events',
    'aws-organizations',
    'eventbridge',
    'aws-cdk',
    'aws-cdk-construct',
    'projen',
  ],
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'deps-upgrade'],
    },
    exclude: ['projen'],
  },
  githubOptions: {
    mergify: true,
    mergifyOptions: {
      rules: [
        {
          name: 'Automatically approve dependency upgrade PRs if they pass build',
          actions: {
            review: {
              type: 'APPROVE',
              message: 'Automatically approved dependency upgrade PR',
            },
          },
          conditions: [
            'label=auto-approve',
            'label=deps-upgrade',
            '-label~=(do-not-merge)',
            'status-success=build',
            'author=github-actions[bot]',
            'title="chore(deps): upgrade dependencies"',
          ],
        },
      ],
    },
    pullRequestLintOptions: {
      semanticTitle: true,
      semanticTitleOptions: {
        types: [
          'chore',
          'docs',
          'feat',
          'fix',
          'ci',
          'refactor',
          'test',
        ],
      },
    },
  },
  stale: true,
  releaseToNpm: true,
  release: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  docgen: true,
  eslint: true,
  publishToPypi: {
    distName: 'renovosolutions.aws-cdk-control-tower-lifecycle-events',
    module: 'control-tower-lifecycle-events',
  },
  publishToNuget: {
    dotNetNamespace: 'renovosolutions',
    packageId: 'Renovo.AWSCDK.ControlTowerLifecycleEvents',
  },
  jestOptions: {
    jestConfig: {
      timers: 'fake',
    },
  },
  workflowNodeVersion: '14.17.0',
});

new javascript.UpgradeDependencies(project, {
  include: ['projen'],
  taskName: 'upgrade-projen',
  labels: ['projen-upgrade'],
  workflow: true,
  workflowOptions: {
    schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 2 * * 1']),
  },
  pullRequestTitle: 'upgrade projen',
});

const ignorePatterns = [
  '.functionbundle/*',
  '.venv/*',
];
ignorePatterns.forEach( (pattern) => {
  project.gitignore.addPatterns(pattern);
  project.npmignore.addPatterns(pattern);
});
project.synth();
