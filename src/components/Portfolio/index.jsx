import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { Nav} from 'react-bootstrap';
import './style.css'

function Portfolio() {
    
    const [active , setActive] = useState(1);
    const [tag , setTag] = useState('All');
    const [filter , setFilter] = useState([]);
    const [effect , setEffect] = useState(false);

    const lists = [
        {id:1,name:"All"} ,
        {id:2,name:"Company"} , 
        {id:3,name:"Marketing"} , 
        {id:4,name:"Resturant & Cafe"},
        {id:5,name:"App Store"},
    ];

    const myList = lists.map((item)=> {
        const handelTag = () => {
            setActive(item.id);
            setTag(item.name);
            setEffect(true);
        }

        return (
            <li key={item.id} onClick={handelTag} className={active===item.id ? 'active' : 'null'}>
                {item.name}
            </li>
        )
    });

    const [items , setItems] = useState([]);

    useEffect(() => {
        axios.get('/json/data.json')
        .then(res => setItems(res.data.portfolio));
    },[])

    const myItems = filter.map((item)=>{
        return(
            <div className={`col-sm-6 col-lg-4 portfolio-item ${effect ? 'effect-mode' : 'null'}`} key={item.id}>
                <div className='port-img'>
                    <img className='img-fluid' src={item.img_source} alt='portfolio-img'/>
                    <div className='port-layer'>
                        <Nav.Link href='https://accounts.hsoub.com/settings' target='_Blank'><img src='/images/icon.png' alt='icon-view'/></Nav.Link>
                    </div>
                </div>
            </div>
        )
    })

    useEffect(() => {
        tag === 'All' ? setFilter(items) : setFilter(items.filter((item) => item.category === tag));
    },[items,tag])

    return (
        <div className='portfolio' id='portfolio'>
            <div className='main-title'>
                <h2>My Portfolio</h2>
                <p>My All Projects</p>
                <span className="rounded-circle d-block"> <span className="rounded-circle d-block"></span> </span>
            </div>
            <ul className='port-list'>
                {myList}
            </ul>
            <div className='container'>
                <div className='portfolio-content row'>
                    {myItems}
                </div>
            </div>
        </div>
    )
}
export default Portfolio;