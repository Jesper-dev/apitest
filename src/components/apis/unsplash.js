import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID eabpjQlG0IceY7dgVeS5je43AkEHWgBPGRyzb_VMR4k'
}
});


