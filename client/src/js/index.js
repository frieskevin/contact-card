import "./form";
import "./submit"
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';


import { initDB, getDb, postDb } from './database';


window.addEventListener('load', function () {
    initDB();
    getDb();
    postDb('lernantino', 'lernantino@test.com', 6666, 'Bear');
    getDb();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
  });

  import "../css/index.css";