const copyicon =
  '<svg xmlns="http://www.w3.org/2000/svg" class="cc-copyicon" width="16" height="16" viewBox="0 0 16 16"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"/><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/></svg>'
const successicon =
  '<svg xmlns="http://www.w3.org/2000/svg" class="cc-successicon" width="16" height="16" viewBox="0 0 16 16"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"/></svg>'

function copycode (hook, vm) {
  hook.doneEach(function () {
    const targetElms = Array.from(document.querySelectorAll('pre[data-lang]'))

    const template = [
      '<button class="copy-code-button">',
      copyicon,
      successicon,
      '</button>'
    ].join('')

    targetElms.forEach(elm => {
      elm.insertAdjacentHTML('beforeend', template)
    })
  })

  hook.mounted(function () {
    const listenerHost = document.querySelector('.content')

    if (listenerHost) {
      listenerHost.addEventListener('click', function (evt) {
        const isCopyCodeButton = evt.target.classList.contains('copy-code-button')

        if (isCopyCodeButton) {
          const buttonElm =
            evt.target.tagName === 'BUTTON' ? evt.target : evt.target.parentNode
          const range = document.createRange()
          const preElm = buttonElm.parentNode
          const codeElm = preElm.querySelector('code')

          let selection = window.getSelection()

          range.selectNode(codeElm)

          if (selection) {
            selection.removeAllRanges()
            selection.addRange(range)
          }

          try {
            // Copy selected text
            const successful = document.execCommand('copy')

            if (successful) {
              buttonElm.classList.add('cc-success')

              setTimeout(function () {
                buttonElm.classList.remove('cc-success')
              }, 1000)
            }
          } catch (err) {
            // eslint-disable-next-line no-console
            console.error(`copy-code: ${err}`)
          }

          selection = window.getSelection()

          if (selection) {
            if (typeof selection.removeRange === 'function') {
              selection.removeRange(range)
            } else if (typeof selection.removeAllRanges === 'function') {
              selection.removeAllRanges()
            }
          }
        }
      })
    }
  })
}

window.$docsify = window.$docsify || {}
window.$docsify.plugins = [copycode].concat(window.$docsify.plugins || [])
