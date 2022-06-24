const model =  {
    id: "1",
    title: "title",
    tanggal: "",
    keterangan: "",
    status: "",
    gambar: ""

  }

function IsiPegumuman({datanya}) {
    if(datanya == undefined) datanya = {};

    /**@type {model} */
    let data = datanya;
    return (
        <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">{data.title}</h3>
                    <p className="card-text mb-auto">{data.keterangan}</p>
                    <div className="mb-1 text-muted">{data.tanggal}</div>
                </div>
                <div className="col-auto d-none d-lg-block">
                    {/* <img className="bd-placeholder-img" width="200" height="250" src={data.gambar} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></img> */}
                    <img src={data.gambar}/>
                </div>
            </div>
        </div>
    )
}




function Pengumuman({datanya}) {
    if(datanya == undefined) datanya = [];

    /**@type {model[]} */ 
    let list = datanya;
    return (
        <div id="pengumuman">
            <div className="col-md-8">
                <h3 className="pb-4 mb-4 fst-italic border-bottom">
                    Pengumuman
                </h3>
            </div>

            <div className="row mb-2">
                {list.map(e => {
                    return (
                        <IsiPegumuman key={e.id} datanya={e}/>
                    )
                })}



                {/* <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success">Design</strong>
                            <h3 className="mb-0">Post title</h3>
                            <div className="mb-1 text-muted">Nov 11</div>
                            <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="stretched-link">Continue reading</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export { Pengumuman }