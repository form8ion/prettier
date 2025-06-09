import {exists} from '@form8ion/config-file';

import {describe, it, vi, expect} from 'vitest';
import {when} from 'vitest-when';
import any from '@travi/any';

import prettierIsPresent from './tester.js';

vi.mock('@form8ion/config-file');

describe('predicate', () => {
  const dummyValueToSatisfySchema = any.simpleObject();

  it('should return `true` when a config file is present', async () => {
    when(exists).calledWith({name: 'prettier', _: dummyValueToSatisfySchema}).thenResolve(true);

    expect(await prettierIsPresent({_: dummyValueToSatisfySchema})).toBe(true);
  });

  it('should return `false` when a config file is not present', async () => {
    when(exists).calledWith({name: 'prettier', _: dummyValueToSatisfySchema}).thenResolve(false);

    expect(await prettierIsPresent({_: dummyValueToSatisfySchema})).toBe(false);
  });
});
