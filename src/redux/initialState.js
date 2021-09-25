export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        title: 'Test1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        date: '22.09.2021 10:54',
        lastUpdate: '24.09.2021 14:31',
        email: 'john@doe.com',
        status: 'published',
        image: 'https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_960_720.jpg',
        price: 1000,
        phone: '123-456-789',
        city: 'Bangkok',
      },
      {
        id: '2',
        title: 'Test2',
        content: 'Nulla mattis leo quis est luctus, posuere tempor velit imperdiet.',
        date: '15.01.2021 09:54',
        lastUpdate: '10.02.2021 23:38',
        email: 'jack@daniels.com',
        status: 'closed',
        image: 'https://cdn.pixabay.com/photo/2016/09/11/10/02/renault-juvaquatre-1661009_960_720.jpg',
        price: 5689,
        phone: '111-222-333',
        city: 'Austria',
      },
      {
        id: '3',
        title: 'Test3',
        content: 'Donec pretium rhoncus leo vel faucibus.',
        date: '24.08.2021 20:42',
        lastUpdate: '26.08.2021 08:45',
        email: 'johnny@walker.com',
        status: 'draft',
        image: 'https://cdn.pixabay.com/photo/2018/05/02/09/29/auto-3368094_960_720.jpg',
        price: 1500,
        phone: '777-888-999',
        city: 'Ireland',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  userType: 'logged-in',
};
