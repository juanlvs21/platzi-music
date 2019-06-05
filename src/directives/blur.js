const blur = {}

function setBlur(el, binding) {
    el.style.filter = !binding.value ? 'blur(2px)' : 'none'
    el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

    el.querySelectorAll('button').forEach(button => {
        if (!binding.value) {
            button.setAttribute('disabled', true)
        } else {
            button.removeAttribute('disabled')
        }
    });
}

blur.install = (Vue) => {
    Vue.directive('blur', {
        bind(el, binding) {
            setBlur(el, binding)
        }
    })
}

export default blur