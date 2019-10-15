module.exports = [{
    name: 'Dashboard',
    id: 'basic',
    sub: [{
      name: '分析页',
      componentName: '/my/BasicLayout'
    }, {
      name: '监控页',
       componentName: '/my/BasicContainer'
    }]
  }, {
    name: '表单页',
    id: 'form',
    sub: [{
      name: '基础表单',
      componentName: '/my/FormRadio'
    }, {
      name: '分布表单',
       componentName: '/my/FormCheckbox'
    }]
  }]
  