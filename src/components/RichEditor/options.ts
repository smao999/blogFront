// 富文本编辑器配置
export const EditorOptions = {
  height: '100%',
  width: '100%',
  language: 'zh_CN',
  statusbar: false,
  skin: 'tinymce-5',
  plugins: [
    'lists', 'advlist', 'autolink', 'link', 'image', 'advcode', 'code', 'searchreplace', 'emoticons',
    'table', 'help', 'formatpainter', 'anchor', 'autosave', 'codesample', 'hr', 'insertdatetime', 'print',
    'preview', 'quickbars', 'charmap', 'media', 'pagebreak', 'fullscreen'
  ],
  toolbar: 'code codesample undo redo restoredraft | cut  copy paste | bullist numlist |' +
    'forecolor backcolor bold italic underline link anchor | styles blocks fontfamily fontsize | alignleft aligncenter alignright alignjustify ' +
    'table | image media charmap emoticons insertdatetime | hr pagebreak print preview |' +
    'fullscreen',
  menu: {
    favs: { title: '常用', items: 'code visualaid | searchreplace | emoticons' }
  },
  menubar: 'favs file edit view insert format tools table help'
}