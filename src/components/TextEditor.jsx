import React, { useState } from 'react'
import { Edit2, Check, X } from 'lucide-react'

const TextEditor = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(null)

  const handleEdit = () => {
    // Khi bắt đầu edit, lưu lại nội dung hiện tại
    const content = document.querySelector('.editable-content')
    if (content) {
      setEditedContent(content.innerHTML)
    }
    setIsEditing(true)
  }

  const handleSave = () => {
    // Cập nhật nội dung mới
    const editableDiv = document.querySelector('.editing-area')
    if (editableDiv) {
      const content = document.querySelector('.editable-content')
      if (content) {
        content.innerHTML = editableDiv.innerHTML
      }
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    // Khôi phục lại nội dung ban đầu
    if (editedContent) {
      const content = document.querySelector('.editable-content')
      if (content) {
        content.innerHTML = editedContent
      }
    }
    setIsEditing(false)
  }

  return (
    <div className='relative min-h-screen'>
      {/* Thanh công cụ edit - fixed ở góc phải */}
      <div className='fixed top-4 right-4 z-50 flex gap-2'>
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className='flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow-lg'
          >
            <Edit2 className='w-4 h-4' />
            Chỉnh sửa nội dung
          </button>
        ) : (
          <>
            <button
              onClick={handleCancel}
              className='flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 shadow-lg'
            >
              <X className='w-4 h-4' />
              Hủy
            </button>
            <button
              onClick={handleSave}
              className='flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 shadow-lg'
            >
              <Check className='w-4 h-4' />
              Lưu
            </button>
          </>
        )}
      </div>

      {/* Nội dung có thể edit */}
      <div className={`editable-content ${isEditing ? 'hidden' : 'block'}`}>
        {children}
      </div>

      {/* Vùng edit */}
      {isEditing && (
        <div
          className='editing-area'
          contentEditable={true}
          dangerouslySetInnerHTML={{ __html: editedContent }}
          style={{
            minHeight: '100vh',
            padding: '1rem',
            outline: 'none',
            whiteSpace: 'pre-wrap'
          }}
        />
      )}
    </div>
  )
}

export default TextEditor
