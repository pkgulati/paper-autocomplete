import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-ripple/paper-ripple';
import '../paper-autocomplete';
//LEGACY
import { templatize } from '@polymer/polymer/lib/utils/templatize';

class CustomTemplate extends PolymerElement {
    static get template() {
        return html`
        <!-- <style>
                            .container{
                                display: flex;
                                flex-direction: column;
                            }

                            .info{
                                padding: 2px;
                            }

                            .info > div{
                                padding: 1px;
                                text-align: center;
                            }

                            .player-points {
                                background-color: #333;
                            }

                            .player-name,  .player-number{
                                margin-top: 4px;
                                background-color: #999;
                            }
                        </style> -->
            <div class="container">
                <paper-autocomplete id="paperAutocompleteCustomTemplate" label="Select Player" source="[[players]]" text-property="player_name">
                    <template id="customTemplate" slot="autocomplete-custom-template">
                        <style>
                            .container{
                                display: flex;
                                flex-direction: column;
                            }

                            .info{
                                padding: 2px;
                            }

                            .info > div{
                                padding-left: 2px;
                            }

                            .player-number {
                                color: #333;
                            }

                            .player-name,  .player-points{
                                margin-top: 4px;
                                color: #999;
                            }
                        </style>
                        <paper-item class="custom-item" on-tap="_onSelect" id$="[[_getSuggestionId(index)]]" role="option" aria-selected="false">
                            <div class="container info">
                                <div class="player-number">Number Shirt:[[item.player_number]]</div>
                                <div class="player-name">Name: [[item.player_name]]</div>
                                <div class="player-points">pts Game: [[item.pts]]</div>
                            </div>
                            <paper-ripple></paper-ripple>
                        </paper-item>
                    </template>
                </paper-autocomplete>
            </div>
        `
    }

    static get properties(){
        return{
            players: {
                type: Array,
                notify: true,
                value: [
                    {
                        "IdoR": "0",
                        "player_id": "DEL-AME-93",
                        "player_name": "Della Valle Amedeo",
                        "player_number": "100",
                        "defensive_rebound": "1",
                        "offensive_rebound": "0",
                        "total_rebound": 1,
                        "steal": "1",
                        "turnover": "2",
                        "assist": "0",
                        "block": "0",
                        "block_received": "0",
                        "made1pts": "1",
                        "attempted1pts": "1",
                        "made2pts": 1,
                        "attempted2pts": 1,
                        "made3pts": "1",
                        "attempted3pts": "3",
                        "pts": 6,
                        "pm": 2
                    },
                    {
                        "IdoR": "0",
                        "player_id": "JAM-MIK-90",
                        "player_name": "James Mike",
                        "player_number": "2",
                        "defensive_rebound": "2",
                        "offensive_rebound": "0",
                        "total_rebound": 2,
                        "steal": "0",
                        "turnover": "2",
                        "assist": "2",
                        "block": "0",
                        "block_received": "0",
                        "made1pts": "0",
                        "attempted1pts": "0",
                        "made2pts": 4,
                        "attempted2pts": 4,
                        "made3pts": "0",
                        "attempted3pts": "0",
                        "pts": 8,
                        "pm": 2
                    },
                    {
                        "IdoR": "0",
                        "player_id": "FON-SIM-95",
                        "player_name": "Fontecchio Simone",
                        "player_number": "13",
                        "defensive_rebound": "0",
                        "offensive_rebound": "0",
                        "total_rebound": 0,
                        "steal": "0",
                        "turnover": "0",
                        "assist": "1",
                        "block": "1",
                        "block_received": "0",
                        "made1pts": "0",
                        "attempted1pts": "0",
                        "made2pts": 1,
                        "attempted2pts": 3,
                        "made3pts": "0",
                        "attempted3pts": "1",
                        "pts": 2,
                        "pm": 0
                    },
                    {
                        "IdoR": "0",
                        "player_id": "TAR-KAL-93",
                        "player_name": "Tarczewski Kaleb",
                        "player_number": "15",
                        "defensive_rebound": "2",
                        "offensive_rebound": "1",
                        "total_rebound": 3,
                        "steal": "0",
                        "turnover": "0",
                        "assist": "0",
                        "block": "0",
                        "block_received": "0",
                        "made1pts": "0",
                        "attempted1pts": "0",
                        "made2pts": 1,
                        "attempted2pts": 2,
                        "made3pts": "0",
                        "attempted3pts": "0",
                        "pts": 2,
                        "pm": -1
                    },
                    {
                        "IdoR": "0",
                        "player_id": "BRO-JEF-89",
                        "player_name": "Brooks Jeff",
                        "player_number": "32",
                        "defensive_rebound": "0",
                        "offensive_rebound": "0",
                        "total_rebound": 0,
                        "steal": "1",
                        "turnover": "0",
                        "assist": "0",
                        "block": "1",
                        "block_received": "0",
                        "made1pts": "0",
                        "attempted1pts": "0",
                        "made2pts": 1,
                        "attempted2pts": 1,
                        "made3pts": "1",
                        "attempted3pts": "2",
                        "pts": 5,
                        "pm": 0
                    },
                    {
                        "IdoR": "0",
                        "player_id": "7164258",
                        "player_name": "Musumeci Riccardo",
                        "player_number": "6",
                        "defensive_rebound": "0",
                        "offensive_rebound": "0",
                        "total_rebound": 0,
                        "steal": "0",
                        "turnover": "0",
                        "assist": "0",
                        "block": "0",
                        "block_received": "0",
                        "made1pts": "0",
                        "attempted1pts": "0",
                        "made2pts": 0,
                        "attempted2pts": 0,
                        "made3pts": "0",
                        "attempted3pts": "0",
                        "pts": 0
                    },
                    {
                        "IdoR": "0",
                        "player_id": "7164258",
                        "player_name": "Musumeci Riccardo",
                        "player_number": "6",
                        "defensive_rebound": "0",
                        "offensive_rebound": "0",
                        "total_rebound": 0,
                        "steal": "0",
                        "turnover": "0",
                        "assist": "0",
                        "block": "0",
                        "block_received": "0",
                        "made1pts": "0",
                        "attempted1pts": "0",
                        "made2pts": 0,
                        "attempted2pts": 0,
                        "made3pts": "0",
                        "attempted3pts": "0",
                        "pts": 0
                    },
                    {
                        "IdoR": "0",
                        "player_id": "BER-DAI-89",
                        "player_name": "Bertans Dairis",
                        "player_number": "9",
                        "defensive_rebound": "0",
                        "offensive_rebound": "0",
                        "total_rebound": 0,
                        "steal": "0",
                        "turnover": "0",
                        "assist": "0",
                        "block": "0",
                        "block_received": "0",
                        "made1pts": "0",
                        "attempted1pts": "0",
                        "made2pts": 0,
                        "attempted2pts": 0,
                        "made3pts": "0",
                        "attempted3pts": "0",
                        "pts": 0
                    },
                    {
                        "IdoR": "0",
                        "player_id": "NED-NEM-91",
                        "player_name": "Nedovic Nemanja",
                        "player_number": "16",
                        "defensive_rebound": "1",
                        "offensive_rebound": "1",
                        "total_rebound": 2,
                        "steal": "0",
                        "turnover": "1",
                        "assist": "3",
                        "block": "0",
                        "block_received": "1",
                        "made1pts": "2",
                        "attempted1pts": "2",
                        "made2pts": 1,
                        "attempted2pts": 2,
                        "made3pts": "1",
                        "attempted3pts": "2",
                        "pts": 7,
                        "pm": 3
                    },
                    {
                        "IdoR": "0",
                        "player_id": "KUZ-MIN-89",
                        "player_name": "Kuzminskas Mindaugas",
                        "player_number": "19",
                        "defensive_rebound": "1",
                        "offensive_rebound": "2",
                        "total_rebound": 3,
                        "steal": "1",
                        "turnover": "1",
                        "assist": "0",
                        "block": "0",
                        "block_received": "0",
                        "made1pts": "2",
                        "attempted1pts": "3",
                        "made2pts": 5,
                        "attempted2pts": 6,
                        "made3pts": "0",
                        "attempted3pts": "2",
                        "pts": 12,
                        "pm": 5
                    },
                    {
                        "IdoR": "0",
                        "player_id": "CIN-AND-86",
                        "player_name": "Cinciarini Andrea",
                        "player_number": "20",
                        "defensive_rebound": "1",
                        "offensive_rebound": "0",
                        "total_rebound": 1,
                        "steal": "0",
                        "turnover": "0",
                        "assist": "0",
                        "block": "0",
                        "block_received": "0",
                        "made1pts": "0",
                        "attempted1pts": "0",
                        "made2pts": 0,
                        "attempted2pts": 1,
                        "made3pts": "0",
                        "attempted3pts": "0",
                        "pts": 0,
                        "pm": 3
                    },
                    {
                        "IdoR": "0",
                        "player_id": "BUR-CHR-85",
                        "player_name": "Burns Christian",
                        "player_number": "23",
                        "defensive_rebound": "3",
                        "offensive_rebound": "2",
                        "total_rebound": 5,
                        "steal": "1",
                        "turnover": "1",
                        "assist": "0",
                        "block": "0",
                        "block_received": "0",
                        "made1pts": "1",
                        "attempted1pts": "2",
                        "made2pts": 2,
                        "attempted2pts": 2,
                        "made3pts": "2",
                        "attempted3pts": "3",
                        "pts": 11,
                        "pm": 6
                    },
                    {
                        "IdoR": "0",
                        "player_id": "JER-CUR-87",
                        "player_name": "Jerrells Curtis",
                        "player_number": "55",
                        "defensive_rebound": "0",
                        "offensive_rebound": "0",
                        "total_rebound": 0,
                        "steal": "0",
                        "turnover": "0",
                        "assist": "1",
                        "block": "0",
                        "block_received": "0",
                        "made1pts": "0",
                        "attempted1pts": "0",
                        "made2pts": 0,
                        "attempted2pts": 1,
                        "made3pts": "0",
                        "attempted3pts": "1",
                        "pts": 0,
                        "pm": 5
                    }
                ]
            }
        }
    }

    ready(){
        super.ready();
        let paperAutocomplete = this.$.paperAutocompleteCustomTemplate;
        paperAutocomplete._queryFn = this._queryFn;
        paperAutocomplete.addEventListener('autocomplete-selected', paperAutocomplete.onSelectHandler);
        templatize(this.$.customTemplate, this);
    }

    _queryFn(dataSource, query){
        dataSource.filter(function (obj) {
            return obj.player_name.toLowerCase().indexOf(query) !== -1;
        })
    }
}

window.customElements.define('custom-template', CustomTemplate);