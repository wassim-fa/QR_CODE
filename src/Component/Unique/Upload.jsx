import React, { useState } from 'react';
import './Upload.css'
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import axios from 'axios';
import Login from './Login';
import DL from '../../Asset/dl.png'
import QRCode from "react-qr-code";

function Upload() {
    const [token, setToken] = useState(() => {
        const saved = localStorage.getItem("token");
        return saved || null;
    });

    if (token === null)
        window.location.replace('http://127.0.0.1:3000/login')

    const [fileToUpload, setFileToUpload] = useState([])
    const [uploaded, setUploaded] = useState([])
    const [uploading, setUploading] = useState(true)

    const onDrop = React.useCallback(async (accepetedFile) => {
        const formData = new FormData();

        Array.from(accepetedFile).forEach((file) => {
            fileToUpload.push(file)
            formData.append("files", file, file.name);
        });

        await axios
            .post(`http://127.0.0.1:1337/api/upload`, formData, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                response.data.map((item) => {
                    uploaded.push(item)
                });
            });
    }, [token, fileToUpload, uploaded]);

    const { getRootProps, getInputProps, isDragReject, isDragActive } =
        useDropzone({
            onDrop,
            multiple: true,
            accept: { doc: [".pdf", ".docx", ".doc"] },
        });
    return (
        <section className='sheesh'>
            {
                token ?
                    <>
                        <div {...getRootProps()} className='UploadBlock'>
                            <h1>Upload your documents</h1>
                            <img alt='DL' src={DL} className='dlfile'></img>
                            <p className='files'>Drag & drop files or <span>Browser</span></p>
                            <p className='support'>Supported formates : .docx, .doc, .pdf</p>
                        </div>

                        {
                            fileToUpload.length > 0 ?
                                <p className='titrefichier'>Uploading - {fileToUpload.length}/{fileToUpload.length} files</p>
                                :
                                <></>
                        }

                        <div className="Uploadzone">
                            <div className="document">
                                {
                                    uploading ?
                                        fileToUpload.map((file) => {
                                            return <p>{file.name}</p>
                                        })
                                        :
                                        uploaded.map((up) => {
                                            console.log(`http://127.0.0.1:1337${up.url}`)
                                            return <QRCode value={`http://127.0.0.1:1337${up.url}`} />
                                        })
                                }

                            </div>
                        </div>

                        <div className="action">
                            <button className='downl'> DOWNLOAD</button>
                            <button onClick={()=>setUploading(false)} className='qrcodeconvert'> CONVERT TO QRCODE</button>
                        </div>
                    </>
                    :
                    <></>
            }
        </section >
    )
}
export default Upload
