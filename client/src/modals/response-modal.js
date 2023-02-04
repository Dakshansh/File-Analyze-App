import React, { useEffect, useState } from "react";
import "./response.modal.css";
export default function ResponseModal({ show, onClose, data }) {
  const [resdata, setResdata] = useState({
    nounPercentage: "",
    verbPercentage: "",
    adjectivePercentage: "",
    adverbPercentage: "",
    restWordsPercentage: "",
  });
  useEffect(() => {
    setResdata(data);
  }, [show, data]);
  console.log(data);
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(s) => s.stopPropagation()}>
        <div className="modal-header">
          <h2>Result after process the textfile - </h2>
          <div className="modal-body">
            <table>
              <thead>
                <tr>
                  <th>Parts-of-speech</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nouns : </td>
                  <td> {resdata.nounPercentage}</td>
                </tr>
                <tr>
                  <td>Adverbs : </td>
                  <td> {resdata.adverbPercentage}</td>
                </tr>
                <tr>
                  <td>Adjectives : </td>
                  <td> {resdata.adjectivePercentage}</td>
                </tr>
                <tr>
                  <td>Verbs : </td>
                  <td> {resdata.verbPercentage}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button className="mod-btn" onClick={onClose}>
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
