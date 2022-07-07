import {Given} from '@cucumber/cucumber';
import any from '@travi/any';

Given('a prettier config is defined', async function () {
  this.scope = `@${any.word()}`
});

Given('no prettier config is defined', async function () {
  this.scope = undefined;
});
