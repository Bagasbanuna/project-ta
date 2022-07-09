// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
/////////////////////

import { RencanaKerja } from './HalamanAdmin/rencana_kerja';

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { MyRouter } from './my_router';
import { Dashboard } from './HalamanAdmin/dashboard';
import { HalamanAdmin } from './HalamanAdmin/admin';
import { Pengurus } from './HalamanAdmin/pengurus';
import { UpdatePengurus } from './HalamanAdmin/update_pengurus';
import { Anggota } from './HalamanAdmin/anggota';
import { Pengumuman } from './HalamanAdmin/pengumuman';
import { Berita } from './HalamanAdmin/berita';
import { UpdateAnggota } from './HalamanAdmin/update_anggota';
import { Arsip } from './HalamanAdmin/arsip';
import { TambahRenja } from './HalamanAdmin/tambah_renja';


ReactDOM.createRoot(document.getElementById('root')).render
(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                {MyRouter.App().Router()}
                {MyRouter.Login().Router()}
                {MyRouter.Regis().Router()}
                {MyRouter.Pengumuman().Router()}
                {MyRouter.Profile().Router()}
                {MyRouter.UpdateProfile().Router()}
                {MyRouter.UploadFoto().Router()}
                {MyRouter.UpdateUploadFoto().Router()}
                {/* {MyRouter.halaman_admin().Router()} */}
                {/* {MyRouter.halaman_dashboard().Router()} */}

                <Route path='/halaman-admin' element={<HalamanAdmin/>} >
                    <Route path='halaman-dashboard' element={<Dashboard/>}/>
                    <Route path='halaman-pengurus' element={<Pengurus/>}/>
                    <Route path='halaman-update-pengurus' element={<UpdatePengurus/>}/>
                    <Route path='halaman-anggota' element={<Anggota/>}/>
                    <Route path='halaman-update-anggota' element={<UpdateAnggota/>}/>
                    <Route path='halaman-rencana-kerja' element={<RencanaKerja/>}/>
                    
                    <Route path='halaman-tambah-renja' element={<TambahRenja/>}/>

                    <Route path='halaman-pengumuman' element={<Pengumuman/>}/>
                    <Route path='halaman-berita' element={<Berita/>}/>
                    <Route path='halaman-arsip' element={<Arsip/>}/>               


                </Route>                
            </Routes>
        </BrowserRouter>
    </Provider>
)
