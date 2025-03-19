import "./snbp.css";
import snbpLogo from "./snbp.png";

/* {
  year, nisn, noreg, name
  date, sch, kabKot
  nameKabKot, prov
} */

export default function Rejected(props) {
  return (
    <div id="main" className="main">
      <div id="main-route" className="main-route">
        <div id="index" className="index">
          <div id="index-rejected" className="index-rejected">
            <div className="index-rejected-header">
              <img
                src={snbpLogo}
                alt="Logo"
                className="index-rejected-header-icon"
              />
              <div className="header-title">
                <h1 className="index-rejected-header-title-text">
                  ANDA DINYATAKAN TIDAK LULUS SELEKSI SNBP{" "}
                  {" " + props.data.year}
                </h1>
                <span className="index-rejected-header-title-sub">
                  MASIH ADA KESEMPATAN MENDAFTAR DAN MENGIKUTI SNBT{" "}
                  {props.data.year} ATAU SELEKSI MANDIRI PTN.
                </span>
              </div>
            </div>
            <div className="index-rejected-content">
              <div className="index-rejected-content-upper">
                <div className="index-rejected-content-upper-bio">
                  <span
                    className="index-rejected-content-upper-bio-nisn"
                    id="index-rejected-nisn"
                  >
                    NISN {props.data.nisn} - NOREG {props.data.noreg}
                  </span>
                  <span
                    className="index-rejected-content-upper-bio-name"
                    id="index-rejected-name"
                  >
                    {props.data.name}
                  </span>
                </div>
              </div>
              <div className="index-rejected-content-lower">
                <div className="index-rejected-content-lower-column index-rejected-content-lower-column-25">
                  <div className="index-rejected-content-lower-column-field">
                    <span className="index-rejected-content-lower-column-field-caption">
                      Tanggal Lahir
                    </span>{" "}
                    <span
                      className="index-rejected-content-lower-column-field-value"
                      id="index-rejected-birthday"
                    >
                      {props.data.date}
                    </span>
                  </div>
                  <div className="index-rejected-content-lower-column-field">
                    <span className="index-rejected-content-lower-column-field-caption">
                      Asal Sekolah
                    </span>{" "}
                    <span
                      className="index-rejected-content-lower-column-field-value"
                      id="index-rejected-school"
                    >
                      {props.data.sch}
                    </span>
                  </div>
                </div>
                <div className="index-rejected-content-lower-column index-rejected-content-lower-column-25">
                  <div className="index-rejected-content-lower-column-field">
                    <span className="index-rejected-content-lower-column-field-caption">
                      Kabupaten/Kota
                    </span>
                    <span
                      className="index-rejected-content-lower-column-field-value"
                      id="index-rejected-regency"
                    >
                      {props.data.kabKot + " " + props.data.nameKabKot}
                    </span>
                  </div>
                  <div className="index-rejected-content-lower-column-field">
                    <span className="index-rejected-content-lower-column-field-caption">
                      Provinsi
                    </span>{" "}
                    <span
                      className="index-rejected-content-lower-column-field-value"
                      id="index-rejected-province"
                    >
                      {props.data.prov}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
