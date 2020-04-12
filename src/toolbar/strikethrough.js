import { name } from '@/command/strikethrough';

export default {
  name,
  icon: 'v-md-icon-strikethrough',
  title: '删除线',
  action(editor) {
    editor.execCommand(name);
  },
};
