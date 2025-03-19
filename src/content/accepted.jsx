import "./snbp.css";
import snbpLogo from "./snbp.png";
import QRCode from "react-qr-code";

/* {
  year, nisn, noreg, name
  prodi, jenjang, univ
  date, sch, kabKot
  nameKabKot, prov, link
} */

export default function Accepted(props) {
  return (
    <div id="main" className="main">
      <div id="main-route" className="main-route">
        <div id="index" className="index">
          <div id="index-accepted" className="index-accepted">
            <div className="index-accepted-header">
              <img
                src={snbpLogo}
                alt="Logo"
                className="index-accepted-header-icon"
              />
              <div className="index-accepted-header-title">
                <h1 className="index-accepted-header-title-text">
                  SELAMAT! ANDA DINYATAKAN LULUS SELEKSI SNBP {props.data.year}
                </h1>
              </div>
            </div>
            <div className="index-accepted-content">
              <div className="index-accepted-content-upper">
                <div className="index-accepted-content-upper-bio">
                  <span
                    className="index-accepted-content-upper-bio-nisn"
                    id="index-accepted-nisn"
                  >
                    NISN {props.data.nisn} - NOREG {props.data.noreg}
                  </span>
                  <span
                    className="index-accepted-content-upper-bio-name"
                    id="index-accepted-name"
                  >
                    {props.data.name}
                  </span>
                  <span
                    className="index-accepted-content-upper-bio-program"
                    id="index-accepted-program"
                  >
                    {props.data.prodi.toUpperCase()}
                    &nbsp;({props.data.jenjang.toUpperCase()})
                  </span>
                  <span
                    className="index-accepted-content-upper-bio-university"
                    id="index-accepted-university"
                  >
                    {props.data.univ.toUpperCase()}
                  </span>
                </div>
                <div
                  className="index-accepted-content-upper-qr"
                  alt="QR"
                  id="index-accepted-qr"
                  style={{
                    backgroundColor: "white",
                    borderLeft: "10px solid white",
                    borderTop: "10px solid white",
                    borderBottom: "10px solid white",
                    justifyContent: "center",
                  }}
                >
                  <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "90%", width: "auto" }}
                    value={props.data.nisn + props.data.noreg}
                    viewBox={`0 0 256 256`}
                  />
                </div>
              </div>
              <div className="index-accepted-content-lower">
                <div className="index-accepted-content-lower-column index-accepted-content-lower-column-25">
                  <div className="index-accepted-content-lower-column-field">
                    <span className="index-accepted-content-lower-column-field-caption">
                      Tanggal Lahir
                    </span>{" "}
                    <span
                      className="index-accepted-content-lower-column-field-value"
                      id="index-accepted-birthday"
                    >
                      {props.data.date}
                    </span>
                  </div>
                  <div className="index-accepted-content-lower-column-field">
                    <span className="index-accepted-content-lower-column-field-caption">
                      Asal Sekolah
                    </span>{" "}
                    <span
                      className="index-accepted-content-lower-column-field-value"
                      id="index-accepted-school"
                    >
                      {props.data.sch}
                    </span>
                  </div>
                </div>
                <div className="index-accepted-content-lower-column index-accepted-content-lower-column-25">
                  <div className="index-accepted-content-lower-column-field">
                    <span className="index-accepted-content-lower-column-field-caption">
                      Kabupaten/Kota
                    </span>
                    <span
                      className="index-accepted-content-lower-column-field-value"
                      id="index-accepted-regency"
                    >
                      {" "}
                      {props.data.kabKot + " " + props.data.nameKabKot}
                    </span>
                  </div>
                  <div className="index-accepted-content-lower-column-field">
                    <span className="index-accepted-content-lower-column-field-caption">
                      Provinsi
                    </span>{" "}
                    <span
                      className="index-accepted-content-lower-column-field-value"
                      id="index-accepted-province"
                    >
                      Prov. {props.data.prov}
                    </span>
                  </div>
                </div>
                <div className="index-accepted-content-lower-column index-accepted-content-lower-column-50">
                  <div className="index-accepted-content-lower-column-note">
                    <span className="index-accepted-content-lower-column-note-title">
                      Silakan lakukan pendaftaran ulang.
                    </span>
                    <span className="index-accepted-content-lower-column-note-subtitle">
                      Informasi pendaftaran ulang di PTN/Politeknik Negeri dapat
                      dilihat pada link berikut:
                    </span>
                    <a
                      href={props.data.link}
                      target="_blank"
                      className="index-accepted-content-lower-column-note-link"
                      id="index-accepted-link"
                    >
                      {props.data.link}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="index-accepted-footer">
              <p className="index-accepted-footer-paragraph">
                Status penerimaan Anda sebagai mahasiswa akan ditetapkan setelah
                PTN tujuan melakukan verifikasi data akademik (rapor dan/atau
                portofolio). Silakan Anda membaca peraturan tentang penerimaan
                mahasiswa baru di laman PTN tujuan.
              </p>
              <p className="index-accepted-footer-paragraph">
                Khusus peserta KIP Kuliah, PTN tujuan juga dapat melakukan
                verifikasi data ekonomi dan/atau kunjungan ke tempat tinggal
                Anda sebelum menetapkan status penerimaan Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
