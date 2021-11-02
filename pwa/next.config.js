let nonce = "";
let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(let i = 0; i < possible.length; i++) {
  nonce += possible.charAt(Math.floor(Math.random() * possible.length));
}

module.exports = {
  images: {
    loader: 'imgix',
    path: '/',
  },
  publicRuntimeConfig: {
    nonce: nonce,
  },
}
