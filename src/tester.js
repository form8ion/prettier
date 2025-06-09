import {exists} from '@form8ion/config-file';

export default function test({_}) {
  return exists({name: 'prettier', _});
}
