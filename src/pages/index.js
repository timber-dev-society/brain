import NotePage, { notePath, noteLink } from './../pages/note-page'
import TodoPage, { todoPath, todoLink } from './../pages/todo-page'
import BookmarkPage, { bookmarkPath, bookmarkLink } from './../pages/bookmark-page'

const pages = [
  { page: TodoPage, path: todoPath, link: todoLink },
  { page: NotePage, path: notePath, link: noteLink },
  { page: BookmarkPage, path: bookmarkPath, link: bookmarkLink },
]

export default pages
