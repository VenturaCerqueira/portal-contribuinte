import '../css/card.css';
import React, { useState } from "react";
import { FaFileAlt, FaDownload, FaPrint } from "react-icons/fa"; // Ícones

const CNDForm = () => {
  const [documento, setDocumento] = useState("");
  const [chaveValidacao, setChaveValidacao] = useState(""); // Estado para a chave de validação
  const [pdfVisible, setPdfVisible] = useState(false);  // Estado para controlar a visibilidade do PDF
  const [emitido, setEmitido] = useState(false); // Estado para bloquear o botão de emissão de CND

  const handleDocumentoChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (value.length <= 11) {
      // CPF
      value = value.replace(/^(\d{3})(\d)/, "$1.$2");
      value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
      value = value.replace(/\.(\d{3})(\d)/, ".$1-$2");
    } else {
      // CNPJ
      value = value.slice(0, 14);
      value = value.replace(/^(\d{2})(\d)/, "$1.$2");
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
    }

    setDocumento(value);
  };

  const handleChaveValidacaoChange = (e) => {
    setChaveValidacao(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!chaveValidacao) {
      alert("Por favor, insira a chave de validação.");
      return; // Não permite o envio se a chave não for válida
    }

    // Exibe o PDF somente após o envio do formulário
    setPdfVisible(true);
    setEmitido(true); // Bloqueia o botão "Emitir CND" após ser clicado
  };

  // Função para baixar o PDF
  const baixarPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://s3.sa-east-1.amazonaws.com/cdn.keep/gestaotributaria/14043269000160/contribuintes/contribuinte-21963/cnd/39865a37b4531b22624a7141bda9d80c-15-12-41.pdf'; 
    link.download = 'CND.pdf'; // Nome do arquivo para download
    link.click();
  };

  // Função para imprimir o PDF
  const imprimirPDF = () => {
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '0px';
    iframe.style.height = '0px';
    iframe.style.border = 'none';
    iframe.src = 'https://s3.sa-east-1.amazonaws.com/cdn.keep/gestaotributaria/14043269000160/contribuintes/contribuinte-21963/cnd/39865a37b4531b22624a7141bda9d80c-15-12-41.pdf'; 
    document.body.appendChild(iframe);
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
  };

  return (
    <div className="cnd-container">
      {/* Título */}
      <h2 className="cnd-title">Validação CND</h2>

      {/* Formulário */}
      <form className="cnd-form" onSubmit={handleSubmit}>
        {/* Campo CPF/CNPJ */}
        <div className="input-container" style={{ alignItems: 'center'}}>
          <input
            type="text"
            id="documento"
            placeholder="Digite CPF ou CNPJ"
            value={documento}
            onChange={handleDocumentoChange}
            maxLength="18"
          />
        </div>

        {/* Campo Chave de Validação */}
        <div className="input-container">
          <input
            type="text"
            placeholder="Chave de Validação"
            value={chaveValidacao}
            onChange={handleChaveValidacaoChange} // Atualiza a chave de validação
          />
        </div>

        {/* Botões de emitir e opções de PDF */}
        <div className="button-group" style={{ display: 'flex'}}>
          <button 
            type="submit" 
            className="emitir-btn"
            disabled={emitido || !chaveValidacao} // Desabilita se a chave não for preenchida
          >
            <FaFileAlt className="icon" /> Emitir CND
          </button>

          {pdfVisible && (
            <>
              <button 
                type="button" 
                className="action-btn" 
                onClick={baixarPDF}
              >
                <FaDownload className="button-icon" /> Baixar PDF
              </button>
              <button 
                type="button" 
                className="action-btn" 
                onClick={imprimirPDF}
              >
                <FaPrint className="button-icon" /> Imprimir PDF
              </button>
            </>
          )}
        </div>
      </form>

      {/* Exibição do PDF - Só aparece se pdfVisible for true */}
      {pdfVisible && (
        <div className="pdf-container" style={{ marginTop: '20px', height: '1200px', width: '90%' }}>
          <embed 
            id="pdfViewer" 
            src="https://s3.sa-east-1.amazonaws.com/cdn.keep/gestaotributaria/14043269000160/contribuintes/contribuinte-21963/cnd/39865a37b4531b22624a7141bda9d80c-15-12-41.pdf#zoom=139" 
            type="application/pdf" 
            width="100%" 
            height="100%" 
          />
        </div>
      )}
    </div>
  );
};

export default CNDForm;
