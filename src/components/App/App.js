import React from 'react';
import axios from 'axios';
import TeamMember from '../TeamMember';
import FormModal from '../MemberForm/FormModal';
import FormContainer from '../MemberForm/FormContainer';
import formFields from '../MemberForm/formFields'
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      loading: true,
      formOpen: false,
      saveErr: false
    };
  }

  async componentDidMount() {
    try {
      await this.fetchInitialData();
    } catch (error) {
      // try again after half a second if fails due to race condition
      console.log('retrying initial data request...');
      setTimeout(async () => {
        await this.fetchInitialData();
      }, 500);
    }
  }

  async fetchInitialData() {
    const response = await axios.get('/team');
    this.setState({
      team: response.data,
      loading: false
    });
  }

  toggleModal = () => {
    this.setState({ formOpen: !this.state.formOpen });
  }

  displayErr = () => {
    this.setState({ saveErr: true })
  }

  saveForm = (member) => {
    axios.post('/form', member)
    .then(response => {
      this.fetchInitialData();
      this.setState({ formOpen: false, saveErr: false });
    })
    .catch(error => this.displayErr());
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    const { formOpen, team, saveErr }  = this.state;
    return (
      <div className="app">
        <div className="team-grid" />
        {team.map(member => (
          <TeamMember
            key={member.id}
            name={`${member.firstName} ${member.lastName}`}
            title={member.title}
            photoUrl={member.photoUrl}
            story={member.story}
            favoriteColor={member.favoriteColor}
          />
        ))}
        {/* Make this new team member link to your form! */}
        <TeamMember openForm={this.toggleModal} newButton id="new" name="Join Us" title="New Teammate" />
        {formOpen && (
          <FormModal>
            <FormContainer
              saveErr={saveErr}
              formFields={formFields}
              closeModal={this.toggleModal}
              saveForm={this.saveForm}
            />
          </FormModal>

        )}
      </div>
    );
  }
}

export default App;
