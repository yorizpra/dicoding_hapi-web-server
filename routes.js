const routes = [
  {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
          return 'Homepage';
      },
  },
  {
      method: '*',
      path: '/',
      handler: (request, h) => {
          return 'Halaman tidak dapat diakses dengan method tersebut';
      },
  },
  {
      method: 'GET',
      path: '/about',
      handler: (request, h) => {
          return 'About page';
      },
  },
  {
      method: '*',
      path: '/about',
      handler: (request, h) => {
          return 'Halaman tidak dapat diakses dengan method';
      },
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
        const { name = "stranger" } = request.params;
        const { lang } = request.query;
 
        if(lang === 'id') {
            return `Hai, ${name}!`;
        }
        return `Hello, ${name}!`;
    },
  },
  {
      method: '*',
      path: '/{any*}',
      handler: (request, h) => {
          return 'Halaman tidak ditemukan';
      },
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
        const { username, password } = request.payload;
        return `Welcome ${username}!`;
    },
  }
];

// Detailed notation
const handler = (request, h) => {
  const response = h.response('success');
  response.type('text/plain');
  response.header('Custom-Header', 'some-value');
  return response;
};

// Chained notation
const handler = (request, h) => {
  return h.response('success')
      .type('text/plain')
      .header('Custom-Header', 'some-value');
};

module.exports = routes;