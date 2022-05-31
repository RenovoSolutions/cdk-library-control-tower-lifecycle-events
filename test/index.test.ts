import { Stack, App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
  AccountCreatedByControlTowerSuccessfullyRule,
  AccountCreatedByOrganizationsSuccessfullyRule,
  AccountUpdatedByControlTowerSuccessfullyRule,
} from '../src/index';

test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  new AccountCreatedByControlTowerSuccessfullyRule(stack, 'AccountCreatedByControlTowerSuccessfullyRule', {});
  new AccountCreatedByOrganizationsSuccessfullyRule(stack, 'AccountCreatedByOrganizationsSuccessfullyRule', {});
  new AccountUpdatedByControlTowerSuccessfullyRule(stack, 'AccountUpdatedByControlTowerSuccessfullyRuleDetailed', {
    accountId: '123456789012',
    accountName: 'ExampleAccount',
    ouId: 'o-123456789012',
    ouName: 'ExampleOrganizationalUnit',
  });
  new AccountUpdatedByControlTowerSuccessfullyRule(stack, 'AccountUpdatedByControlTowerSuccessfullyRule', {});

  expect(Template.fromStack(stack)).toMatchSnapshot();
});