import React, { useState } from 'react'
import { Edit2, Check, Settings2 } from 'lucide-react'

const DocumentEditor = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [styles, setStyles] = useState({
    fontSize: '16px',
    lineHeight: '1.5',
    textColor: '#000000',
    backgroundColor: '#ffffff',
    padding: '20px'
  })

  const handleStyleChange = (property, value) => {
    setStyles(prev => ({
      ...prev,
      [property]: value
    }))
  }

  return (
    <div className='w-full mb-4 bg-gray-50 rounded-lg'>
      <div className='p-4 border-b border-gray-200'>
        <div className='flex items-center gap-2'>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              isEditing
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white`}
          >
            {isEditing ? (
              <>
                <Check className='w-4 h-4' />
                Hoàn tất
              </>
            ) : (
              <>
                <Edit2 className='w-4 h-4' />
                Chỉnh sửa
              </>
            )}
          </button>

          {isEditing && (
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className='flex items-center gap-2 px-4 py-2 rounded bg-gray-500 hover:bg-gray-600 text-white'
            >
              <Settings2 className='w-4 h-4' />
              {showAdvanced ? 'Cơ bản' : 'Nâng cao'}
            </button>
          )}
        </div>

        {isEditing && (
          <div className='mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            <div className='flex flex-col'>
              <label className='text-sm text-gray-600'>Cỡ chữ</label>
              <select
                value={styles.fontSize}
                onChange={e => handleStyleChange('fontSize', e.target.value)}
                className='border rounded p-1'
              >
                {[12, 14, 16, 18, 20, 24].map(size => (
                  <option key={size} value={`${size}px`}>
                    {size}px
                  </option>
                ))}
              </select>
            </div>

            <div className='flex flex-col'>
              <label className='text-sm text-gray-600'>Giãn dòng</label>
              <select
                value={styles.lineHeight}
                onChange={e => handleStyleChange('lineHeight', e.target.value)}
                className='border rounded p-1'
              >
                {[1, 1.2, 1.5, 1.8, 2].map(size => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div className='flex flex-col'>
              <label className='text-sm text-gray-600'>Màu chữ</label>
              <input
                type='color'
                value={styles.textColor}
                onChange={e => handleStyleChange('textColor', e.target.value)}
                className='w-full h-8 p-0 border rounded'
              />
            </div>

            {showAdvanced && (
              <>
                <div className='flex flex-col'>
                  <label className='text-sm text-gray-600'>Màu nền</label>
                  <input
                    type='color'
                    value={styles.backgroundColor}
                    onChange={e =>
                      handleStyleChange('backgroundColor', e.target.value)
                    }
                    className='w-full h-8 p-0 border rounded'
                  />
                </div>

                <div className='flex flex-col'>
                  <label className='text-sm text-gray-600'>Padding</label>
                  <select
                    value={styles.padding}
                    onChange={e => handleStyleChange('padding', e.target.value)}
                    className='border rounded p-1'
                  >
                    {[10, 20, 30, 40].map(size => (
                      <option key={size} value={`${size}px`}>
                        {size}px
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div style={styles} className='transition-all duration-300'>
        {children}
      </div>
    </div>
  )
}

export default DocumentEditor
