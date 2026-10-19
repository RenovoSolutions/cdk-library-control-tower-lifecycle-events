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
  GuardrailBehaviors,
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
  new UpdatedManagedAccountRule(stack, 'UpdatedManagedAccountRuleIdsOnly', {
    accountId: '123456789012',
    ouId: 'ou-example1234',
  });

  new RegisteredOrganizationalUnitRule(stack, 'RegisteredOrganizationalUnitRule', {});
  new DeregisteredOrganizationalUnitRule(stack, 'DeregisteredOrganizationalUnitRule', {});
  new DisabledGuardrailRule(stack, 'DisabledGuardrailRule', {});
  new EnabledGuardrailRule(stack, 'EnabledGuardrailRule', {});
  new SetupLandingZoneRule(stack, 'SetupLandingZoneRule', {});
  new UpdatedLandingZoneRule(stack, 'UpdatedLandingZoneRule', {});

  new CreatedAccountRule(stack, 'CreatedAccountRuleFiltered', {
    ouId: 'ou-example1234',
    ouName: 'ExampleOU',
  });
  new DeregisteredOrganizationalUnitRule(stack, 'DeregisteredOrganizationalUnitRuleFiltered', {
    ouId: 'ou-example1234',
    ouName: 'ExampleOU',
  });
  for (const [name, Rule] of [
    ['CreatedAccount', CreatedAccountRule],
    ['DeregisteredOrganizationalUnit', DeregisteredOrganizationalUnitRule],
  ] as const) {
    new Rule(stack, `${name}RuleOuIdOnly`, { ouId: 'ou-example1234' });
    new Rule(stack, `${name}RuleOuNameOnly`, { ouName: 'ExampleOU' });
  }
  for (const [name, Rule] of [['Enabled', EnabledGuardrailRule], ['Disabled', DisabledGuardrailRule]] as const) {
    new Rule(stack, `${name}GuardrailRuleFiltered`, {
      ouId: 'ou-example1234',
      ouName: 'ExampleOU',
      guardrailId: 'EXAMPLE_CONTROL',
      guardrailBehavior: GuardrailBehaviors.DETECTIVE,
    });
    new Rule(stack, `${name}GuardrailRuleOuOnly`, { ouId: 'ou-example1234' });
    new Rule(stack, `${name}GuardrailRuleOuNameOnly`, { ouName: 'ExampleOU' });
    new Rule(stack, `${name}GuardrailRuleGuardrailOnly`, { guardrailId: 'EXAMPLE_CONTROL' });
    new Rule(stack, `${name}GuardrailRuleBehaviorOnly`, { guardrailBehavior: GuardrailBehaviors.DETECTIVE });
  }

  expect(Template.fromStack(stack)).toMatchSnapshot();
});
