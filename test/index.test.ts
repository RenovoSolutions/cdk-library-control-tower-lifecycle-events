import { Stack, App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
  CreatedAccountRule,
  CreatedAccountByOrganizationsRule,
  UpdatedManagedAccountRule,
  RegisteredOrganizationalUnitRule,
  DeregisteredOrganizationalUnitRule,
  DisabledGuardrailRule,
  EnabledGuardrailRule,
  SetupLandingZoneRule,
  UpdatedLandingZoneRule,
} from '../src/index';

test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  new CreatedAccountRule(stack, 'CreatedAccountRule', {});
  new CreatedAccountByOrganizationsRule(stack, 'CreatedAccountByOrganizationsRule', {});
  new UpdatedManagedAccountRule(stack, 'UpdatedManagedAccountRuleDetailed', {
    accountId: '123456789012',
    accountName: 'ExampleAccount',
    ouId: 'o-123456789012',
    ouName: 'ExampleOrganizationalUnit',
  });
  new UpdatedManagedAccountRule(stack, 'UpdatedManagedAccountRuleLessDetailed', {
    accountName: 'ExampleAccount',
    ouName: 'ExampleOrganizationalUnit',
  });
  new UpdatedManagedAccountRule(stack, 'UpdatedManagedAccountRule', {});

  new RegisteredOrganizationalUnitRule(stack, 'RegisteredOrganizationalUnitRule', {});
  new DeregisteredOrganizationalUnitRule(stack, 'DeregisteredOrganizationalUnitRule', {});
  new DisabledGuardrailRule(stack, 'DisabledGuardrailRule', {});
  new EnabledGuardrailRule(stack, 'EnabledGuardrailRule', {});
  new SetupLandingZoneRule(stack, 'SetupLandingZoneRule', {});
  new UpdatedLandingZoneRule(stack, 'UpdatedLandingZoneRule', {});

  expect(Template.fromStack(stack)).toMatchSnapshot();
});
