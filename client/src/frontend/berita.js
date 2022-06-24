function Berita() {
    return (
        <div className="col-md-4" id="berita">
            <div className="position-sticky" style={{ top: 2 }}>
                <div className="p-4 mb-3 bg-light rounded">
                    <h4 className="fst-italic">Berita</h4>
                    <div className="col">
                        <svg className= "bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        <div className="card-body">
                            <p className="card-text">Serba serbi Agenda Seminar Nasional IMMUKI 2022</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Lihat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <h4 className="fst-italic">Berita Bulanan</h4>
                    <ol className="list-unstyled mb-0">
                        <li><a href="#">January 2022</a></li>
                        <li><a href="#">February 2022</a></li>
                        <li><a href="#">March 2022</a></li>
                        <li><a href="#">April 2022</a></li>
                        <li><a href="#">May 2022</a></li>
                        <li><a href="#">June 2022</a></li>
                        <li><a href="#">July 2022</a></li>
                        <li><a href="#">August 2022</a></li>
                        <li><a href="#">September 2022</a></li>
                        <li><a href="#">October 2022</a></li>
                        <li><a href="#">November 2022</a></li>
                        <li><a href="#">December 2022</a></li>
                    </ol>
                </div>

                <div className="p-4" id="medsos">
                    <h4 className="fst-italic" >Sosial Media</h4>
                    <ol className="list-unstyled">
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Youtube</a></li>
                    </ol>
                </div>
            </div>
        </div>

    )
}

export {Berita}