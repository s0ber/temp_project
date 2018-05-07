import Folder from './folder.js'

const FoldersList = (folders, selectedFolderId) => `
  <div class="folders">
    <ul class="folders_list"/>${
      folders.length > 0
        ? folders.map(folder => Folder(folder, folder.id === selectedFolderId)).join('')
        : 'Please add your first folder'
    }</ul>
    <button onclick="Actions.addFolder()">Add folder</button>
  </div>
`
export default FoldersList
