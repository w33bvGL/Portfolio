/**
 * Copy text to the clipboard. Returns whether the write succeeded so the
 * caller can decide how to surface feedback (toast, inline state, etc.).
 *
 * Uses the async Clipboard API when available and falls back to a hidden
 * <textarea> + execCommand for older / non-secure-context browsers.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (import.meta.server) return false

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }

    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(textarea)
    return ok
  } catch {
    return false
  }
}
