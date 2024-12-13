import React, { useState } from "react";
import { Edit2, Check, Settings2, Save } from "lucide-react";

const DocumentEditor = ({ children, onStyleChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [styles, setStyles] = useState({
    // Text styles
    fontSize: "16px",
    fontFamily: "Arial",
    lineHeight: "1.5",
    textColor: "#000000",
    textAlign: "left",

    // Spacing
    padding: "20px",
    marginBottom: "16px",

    // Colors & Background
    backgroundColor: "#ffffff",

    // Advanced styles
    letterSpacing: "0px",
    paragraphSpacing: "1em",
    columnCount: "1",
  });

  const handleStyleChange = (property, value) => {
    const newStyles = {
      ...styles,
      [property]: value,
    };
    setStyles(newStyles);
    if (onStyleChange) {
      onStyleChange(newStyles);
    }
  };

  const saveAsPreset = () => {
    const presetName = prompt("Nhập tên cho preset này:");
    if (presetName) {
      const presets = JSON.parse(localStorage.getItem("stylePresets") || "{}");
      presets[presetName] = styles;
      localStorage.setItem("stylePresets", JSON.stringify(presets));
      alert("Đã lưu preset thành công!");
    }
  };

  return (
    <div className="w-full mb-4 bg-gray-50 rounded-lg">
      {/* Control Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`flex items-center gap-2 px-4 py-2 rounded ${
                isEditing
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              {isEditing ? (
                <>
                  <Check className="w-4 h-4" />
                  Hoàn tất
                </>
              ) : (
                <>
                  <Edit2 className="w-4 h-4" />
                  Chỉnh sửa
                </>
              )}
            </button>

            {isEditing && (
              <>
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-gray-500 hover:bg-gray-600 text-white"
                >
                  <Settings2 className="w-4 h-4" />
                  {showAdvanced ? "Cơ bản" : "Nâng cao"}
                </button>

                <button
                  onClick={saveAsPreset}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-purple-500 hover:bg-purple-600 text-white"
                >
                  <Save className="w-4 h-4" />
                  Lưu preset
                </button>
              </>
            )}
          </div>
        </div>

        {/* Style Controls */}
        {isEditing && (
          <div className="mt-4 space-y-4">
            {/* Basic Settings */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600">Font chữ</label>
                <select
                  value={styles.fontFamily}
                  onChange={(e) =>
                    handleStyleChange("fontFamily", e.target.value)
                  }
                  className="border rounded p-1"
                >
                  <option value="Arial">Arial</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Helvetica">Helvetica</option>
                  <option value="Calibri">Calibri</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600">Cỡ chữ</label>
                <select
                  value={styles.fontSize}
                  onChange={(e) =>
                    handleStyleChange("fontSize", e.target.value)
                  }
                  className="border rounded p-1"
                >
                  {[12, 14, 16, 18, 20, 24].map((size) => (
                    <option key={size} value={`${size}px`}>
                      {size}px
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600">Giãn dòng</label>
                <select
                  value={styles.lineHeight}
                  onChange={(e) =>
                    handleStyleChange("lineHeight", e.target.value)
                  }
                  className="border rounded p-1"
                >
                  {[1, 1.2, 1.5, 1.8, 2].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600">Căn lề</label>
                <select
                  value={styles.textAlign}
                  onChange={(e) =>
                    handleStyleChange("textAlign", e.target.value)
                  }
                  className="border rounded p-1"
                >
                  <option value="left">Trái</option>
                  <option value="center">Giữa</option>
                  <option value="right">Phải</option>
                  <option value="justify">Đều 2 bên</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600">Màu chữ</label>
                <input
                  type="color"
                  value={styles.textColor}
                  onChange={(e) =>
                    handleStyleChange("textColor", e.target.value)
                  }
                  className="w-full h-8 p-0 border rounded"
                />
              </div>
            </div>

            {/* Advanced Settings */}
            {showAdvanced && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4 border-t border-gray-200">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600">Khoảng chữ</label>
                  <select
                    value={styles.letterSpacing}
                    onChange={(e) =>
                      handleStyleChange("letterSpacing", e.target.value)
                    }
                    className="border rounded p-1"
                  >
                    {[-2, -1, 0, 1, 2, 3].map((size) => (
                      <option key={size} value={`${size}px`}>
                        {size}px
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-600">Khoảng đoạn</label>
                  <select
                    value={styles.paragraphSpacing}
                    onChange={(e) =>
                      handleStyleChange("paragraphSpacing", e.target.value)
                    }
                    className="border rounded p-1"
                  >
                    {[1, 1.2, 1.5, 2].map((size) => (
                      <option key={size} value={`${size}em`}>
                        {size}em
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-600">Số cột</label>
                  <select
                    value={styles.columnCount}
                    onChange={(e) =>
                      handleStyleChange("columnCount", e.target.value)
                    }
                    className="border rounded p-1"
                  >
                    {[1, 2, 3].map((count) => (
                      <option key={count} value={count}>
                        {count} cột
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-600">Màu nền</label>
                  <input
                    type="color"
                    value={styles.backgroundColor}
                    onChange={(e) =>
                      handleStyleChange("backgroundColor", e.target.value)
                    }
                    className="w-full h-8 p-0 border rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-600">Padding</label>
                  <select
                    value={styles.padding}
                    onChange={(e) =>
                      handleStyleChange("padding", e.target.value)
                    }
                    className="border rounded p-1"
                  >
                    {[10, 20, 30, 40].map((size) => (
                      <option key={size} value={`${size}px`}>
                        {size}px
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Content Preview */}
      <div style={styles} className="transition-all duration-300">
        {children}
      </div>
    </div>
  );
};

export default DocumentEditor;
