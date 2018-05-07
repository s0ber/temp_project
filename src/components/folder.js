const Folder = (folder, shouldSelectFolder) => `
  <div class="folder ${shouldSelectFolder ? ' is-selected' : ''}" onclick="Actions.selectFolder(${folder.id})">${folder.title}</div>
`
export default Folder
