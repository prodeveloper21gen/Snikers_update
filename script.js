    const array = [
        {
            name: "Hartbee",
            image: "https://c8.alamy.com/comp/HH496G/snickers-shoes-isolated-on-white-background-HH496G.jpg",
            about: "Expeance potential with every stride. Dominate your training sessions, races, and personal bests with these exceptional shoes designed to take you further, faster, and in style.",
            price: "$35",
            btn: "Buy Now",
            stars: '★★☆☆☆',
            sizes: '',
            colors: ''
        },
        {
            name: "Loafers",
            image: "https://pics.craiyon.com/2023-07-18/19ef5828a2504f81a55bdc39240e94ca.webp",
            about: "Comfort and style meet with tv iwehwh iuo woefg uweiogf woegfo ghese fashionable loafers. Perfect for any casual or semi-formal occasion.",
            price: "$23.234",
            btn: "Buy Now",
            stars: '★★☆☆☆',
            sizes: '',
            colors: ''
        },
        {
            name: "Brogue",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeX0dZeXirNitHsC1EZSPkK14Vg1wDwuGng&s",
            about: "Classic and timeless, these brogues are perfect for any formal setting. Made with high-quality materials for lasting comfort.",
            price: "$127",
            btn: "More Details",
            stars: '★★★★☆',
            sizes: '',
            colors: ["red", "yellow", "blue", "green"]
        },
        {
            name: "Sneakers",
            image: "https://dmfonline.co.za/wp-content/uploads/2023/10/Roller-Sneakers-for-Kids-Boys-Size-28-40-LED-Light-Up-Shoes-with-Double-Wheels-USB.jpg_640x640_1d16690f-7323-484b-a0db-ed89df76d7fd-150x150.jpg",
            about: "Get ready for the ultimate in comfort and performance wibherviev iergveuigvrg rvuigeruiger vig eifeeugfiueg erviegv eveuith these top-of-the-line sneakers.",
            price: "$99",
            btn: "Buy Now",
            stars: '★★★★★',
            sizes: '',
            colors: ''
        },
        {
            name: "Boots",
            image: "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Library-Sites-SkechersSharedLibrary/default/dw88f3e6e6/images/2024-Images/Q2/SKX62403%20Shop%20by%20Style%20Grid%20Environmental%20Shots%20Spring-Summer%202024_Womens_750x664-Athletic%20Sneakers%20150116GYMT.jpg",
            about: "Durable and rugged, these boots are designed to withstand the toughest conderkvheor viue gviuerv eiuv euuv v ev gov o gdsic ditions.",
            price: "$150",
            btn: "Buy Now",
            stars: '★★☆☆☆',
            sizes: '',
            colors: ''
        },
        {
            name: "Sandals",
            image: "https://riogiftshop.com/wp-content/uploads/2021/10/Mesh-Breathable-Comfy-Unisex-Sneaker-Shoes-10-150x150.jpg",
            about: "Perfect for summer, these sandals offer both comfort and style for your warm weather advewfewig iw wfw vywfvywfv evw vye fviywf wfi ntures.",
            price: "$45",
            btn: "Buy Now",
            stars: '★★☆☆☆',
            sizes: '',
            colors: ''
        },
        {
            name: "Flip-Flops",
            image: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNDYyNjQ0Mi9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTc0MDIyMDk3MH0.YRsisE31EUqJ1kk8nHuPFGP4PDeiSbmq5mKEUF6LIKk/img.jpg?width=1200&height=800&quality=100&coordinates=150%2C0%2C150%2C0",
            about: "Easy to slip on and off, these flip-flops are a must-have for beach days and casual ouefgiegvue veg gvergviue rvg eivg vuieg vieveiu eiv ed vgtings.",
            price: "$20",
            btn: "Buy Now",
            stars: '★☆☆☆☆',
            sizes: '',
            colors: ''
        },
        {
            name: "Slippers",
            image: "https://i.ebayimg.com/images/g/rukAAOSw08dgHe0K/s-l400.jpg",
            about: "Stay cozy and comfortable at home with these plush slippers, perfect for loungingeveh uieviue vie vu eviu eviu ev   uiguig uigi  around.",
            price: "$30",
            btn: "Buy Now",
            stars: '★★★☆☆',
            sizes: '',
            colors: ''
        }
    ];
    const container = document.querySelector('.box');
    array.forEach((tovar) => {
        const card = document.createElement('div');
        const img = document.createElement('img');
        const name = document.createElement('h2');
        const about = document.createElement('p');
        const price = document.createElement('div');
        const button = document.createElement('button');
        const stars = document.createElement('div');
        const sizes = document.createElement('div');
        const colors = document.createElement('div');
        card.classList.add('card');
        price.classList.add('price');
        button.classList.add('buybtn');
        stars.classList.add('stars');
        sizes.classList.add('sizes');
        colors.classList.add('colors');
        card.append(img, name, about, price, stars, colors, button);
        container.appendChild(card);
        name.innerHTML = tovar.name;
        about.innerHTML = tovar.about;
        price.innerHTML = tovar.price;
        button.innerHTML = tovar.btn;
        colors.innerHTML = "COLORS: 🔴🔵🟡";
        stars.innerHTML = tovar.stars;
        img.src = tovar.image;
});