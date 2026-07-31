import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';

const toolbarBtn = (active) => ({
  padding: '6px 10px',
  border: '1px solid #d1d5db',
  borderRadius: 6,
  background: active ? '#0f1f3d' : '#fff',
  color: active ? '#fff' : '#374151',
  cursor: 'pointer',
  fontSize: 13,
  fontWeight: 600,
  lineHeight: 1,
});

// Controlled-ish editor: give it a `key` prop from the parent (e.g. the item id,
// or 'new' when adding) so it fully remounts with fresh content when you switch
// between items, instead of fighting cursor position on every value change.
export default function RichTextEditor({ value, onChange, placeholder = 'Start writing...' }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({ placeholder }),
    ],
    content: value || '',
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return null;

  const buttons = [
    { label: 'B', title: 'Bold', active: editor.isActive('bold'), onClick: () => editor.chain().focus().toggleBold().run(), style: { fontWeight: 700 } },
    { label: 'I', title: 'Italic', active: editor.isActive('italic'), onClick: () => editor.chain().focus().toggleItalic().run(), style: { fontStyle: 'italic' } },
    { label: 'U', title: 'Underline', active: editor.isActive('underline'), onClick: () => editor.chain().focus().toggleUnderline().run(), style: { textDecoration: 'underline' } },
    { label: 'S', title: 'Strikethrough', active: editor.isActive('strike'), onClick: () => editor.chain().focus().toggleStrike().run(), style: { textDecoration: 'line-through' } },
    { label: 'H2', title: 'Heading', active: editor.isActive('heading', { level: 2 }), onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run() },
    { label: 'H3', title: 'Subheading', active: editor.isActive('heading', { level: 3 }), onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run() },
    { label: '• List', title: 'Bullet list', active: editor.isActive('bulletList'), onClick: () => editor.chain().focus().toggleBulletList().run() },
    { label: '1. List', title: 'Numbered list', active: editor.isActive('orderedList'), onClick: () => editor.chain().focus().toggleOrderedList().run() },
    { label: '" "', title: 'Quote', active: editor.isActive('blockquote'), onClick: () => editor.chain().focus().toggleBlockquote().run() },
  ];

  return (
    <div style={{ border: '1px solid #d1d5db', borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: 8, background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
        {buttons.map((btn) => (
          <button
            key={btn.title}
            type="button"
            title={btn.title}
            onClick={btn.onClick}
            style={{ ...toolbarBtn(btn.active), ...(btn.style || {}) }}
          >
            {btn.label}
          </button>
        ))}
        <div style={{ width: 1, background: '#d1d5db', margin: '0 4px' }} />
        <button type="button" title="Undo" onClick={() => editor.chain().focus().undo().run()} style={toolbarBtn(false)}>↺</button>
        <button type="button" title="Redo" onClick={() => editor.chain().focus().redo().run()} style={toolbarBtn(false)}>↻</button>
      </div>
      <div style={{ padding: '12px 14px', minHeight: 140 }}>
        <EditorContent editor={editor} />
      </div>

      <style>{`
        .tiptap { font-size: 14px; color: #111827; outline: none; min-height: 120px; }
        .tiptap p { margin: 0 0 10px; line-height: 1.6; }
        .tiptap h2 { font-size: 20px; font-weight: 700; margin: 14px 0 8px; color: #0f1f3d; }
        .tiptap h3 { font-size: 17px; font-weight: 700; margin: 12px 0 6px; color: #0f1f3d; }
        .tiptap ul, .tiptap ol { padding-left: 22px; margin: 0 0 10px; }
        .tiptap li { margin-bottom: 4px; }
        .tiptap blockquote { border-left: 3px solid #d1d5db; margin: 10px 0; padding-left: 14px; color: #6b7280; font-style: italic; }
        .tiptap strong { font-weight: 700; }
        .tiptap p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          color: #9ca3af;
          float: left;
          height: 0;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}