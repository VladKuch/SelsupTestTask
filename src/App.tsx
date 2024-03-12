import { Component } from 'react';
import './global.scss';


interface Param {
    id: number;
    name: string;
    type: 'string' | 'number' | 'list';
}

interface ParamValue {
    paramId: number;
    value: string;
}

interface Model {
    paramValues: ParamValue[];
    // colors: Color[];
}

const params: Param[] = [
    { id: 1, name: 'Назначение', type: 'string' },
    { id: 2, name: 'Длина', type: 'string' },
];

const initialModel: Model = {
    paramValues: [
        { paramId: 1, value: 'повседневное' },
        { paramId: 2, value: 'макси' },
    ],
};


interface Props {
    params: Param[];
    model: Model;
    onModelChange: (model: Model) => void;
}

interface State {
    model: Model;
    editedModel: Model;
}

class ParamEditor extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            model: props.model,
            editedModel: props.model,
        };
    }

    getModel = () => {
        return this.state.editedModel;
    };

    handleInputChange = (paramId: number, value: string) => {
        const { editedModel } = this.state;
        const updatedParamValues = editedModel.paramValues.map(param => {
            if (param.paramId === paramId) {
                return { ...param, value };
            }
            return param;
        });
        const updatedModel: Model = {
            ...editedModel,
            paramValues: updatedParamValues,
        };
        this.setState({ editedModel: updatedModel });
    };

    handleSave = () => {
        const { editedModel } = this.state;
        this.props.onModelChange(editedModel);
        this.setState({ model: editedModel });
    };

    render() {
        const { params } = this.props;
        const { editedModel } = this.state;

        return (
            <div className="param-editor">
                <p className="param-editor-heading">Редактор Параметров</p>
                {params.map(param => (
                    <div key={param.id}>
                        <label>{param.name}</label>
                        <input
                            type="text"
                            value={editedModel.paramValues.find(p => p.paramId === param.id)?.value || ''}
                            onChange={(e) => this.handleInputChange(param.id, e.target.value)}
                        />
                    </div>
                ))}
                <button onClick={this.handleSave}>Сохранить</button>
            </div>
        );
    }
}

class App extends Component {
    handleModelChange = (model: Model) => {
        console.log('New model:', model);
    };

    render() {
        return (
            <div>
                <ParamEditor params={params} model={initialModel} onModelChange={this.handleModelChange} />
            </div>
        );
    }
}

export default App;
