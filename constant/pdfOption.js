module.exports = {
  formate: 'A3',
  orientation: 'portrait',
  border: '2mm',
  header: {
      height: '2mm',
      contents: ''
  },
  footer: {
      height: '20mm',
      contents: {
          first: 'Cover page',
          2: 'Second page',
          default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', 
          last: 'Last Page'
      }
  }
}