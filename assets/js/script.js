class LandingPageElo7 {

    constructor() {}

    /**
     * Método inicializador da classe
     *
     * @memberof LandingPageElo7
     * @method onInit
     */
    onInit() {
        this.getApiData()
            .then(response => {
                const filterJobs = this.getFilterJobsActive(response.vagas);
                const markup = this.getMarkup(filterJobs);
                this.setMarkup(markup);
            });
    }

    /**
     * Método que faz a requisição a API de jobs
     *
     * @memberof LandingPageElo7
     * @method getApiData
     * @return {Promise}
     */
    getApiData() {
        const urlApi = `${window.location.protocol === 'https:' ? window.location.protocol : 'http:'}//www.mocky.io/v2/5d6fb6b1310000f89166087b`;
        return new Promise(resolve => {
            fetch(urlApi)
                .then(json => json.json())
                .then(response => resolve(response));
        });
    }
    
    /**
     * Método que filtra as vagas ativas
     *
     * @memberof LandingPageElo7
     * @method getFilterJobsActive
     * @param {Object} jobs - array com as vagas vindas da API
     * @return {Object} jobs - array filtrado somente com as vagas ativas
     */
    getFilterJobsActive(jobs) {
        return jobs.filter(job => job.ativa);
    }

    /**
     * Método que cria o markup para inserir na página
     *
     * @memberof LandingPageElo7
     * @method getMarkup
     * @param {Object} jobs - array com os jobs filtrados
     * @return {String} markup - markup montado para inserir na página
     */
    getMarkup(jobs) {
        let markup = '';

        jobs.map(job => {
            const location = job.localizacao
                ? `${job.localizacao.bairro} - ${job.localizacao.cidade}, ${job.localizacao.pais}`
                : 'Remoto';
            markup += `
                <div class="landing-page-jobs-item flex">
                    <a href="${job.link}" class="landing-page-jobs-link font-bold" title="${job.cargo}">${job.cargo}</a>
                    <span class="landing-page-jobs-location font-bold">${location}</span>
                </div>
            `;
        });

        return markup;
    }

    /**
     * Método que insere o markup na página
     *
     * @memberof LandingPageElo7
     * @method setMarkup
     * @param {String} markup - HTML montado
     */
    setMarkup(markup) {
        document.querySelector('.landing-page-jobs .landing-page-jobs-items').innerHTML = markup;
    }
}

// Instância da classe
const landingPageElo7 = new LandingPageElo7;

landingPageElo7.onInit();
