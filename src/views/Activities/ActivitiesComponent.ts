import { Component, Vue } from 'vue-property-decorator';
import Template from './ActivitiesTemplate.vue';
import ActivityPersonalData from '@/components/ActivityForm/ActivityPersonalData/ActivityPersonalDataComponent';
import ActivityTypeSelection from '@/components/ActivityForm/ActivityTypeSelection/ActivityTypeSelectionComponent';
import { Activity, ActivityTypesComponents } from '@/modules/types';
import MixinValidation from '@/mixins/validation';
import Basket from '@/components/ActivityForm/Types/Basket/BasketComponent';
import Tennis from '@/components/ActivityForm/Types/Tennis/TennisComponent';
import Football from '@/components/ActivityForm/Types/Football/FootballComponent';

@Component({
  mixins: [Template, MixinValidation],
  components: {
    ActivityPersonalData,
    ActivityTypeSelection,
    Basket,
    Tennis,
    Football,
  },
})
export default class Activities extends Vue {
  private reset: boolean = true;
  private activity_types_components: ActivityTypesComponents = [
    'football',
    'basket',
    'tennis',
  ];
  private activity: Activity = {
    terms: false,
    personal_data: {
      name: '',
      surname: '',
    },
    activity_type_selection: {
      type: 1,
      date: '',
    },
    activity_selected_data: {
      team: '',
      information: '',
    },
  };

  public async mounted() {
    const { data } = await this.axios({
      method: 'GET',
      url: 'activities_subscriptions/1',
    });
    this.activity = data;
  }

  private clearForm() {
    // Para limpiar el formulario simplemente lo inicializamos
    // al estado inicial que tenía en este componente
    // @ts-ignore
    Object.assign(this.$data, this.$options.data.apply(this));
  }

  private clearErrors() {
    this.reset = true;
    this.$validator.reset();
  }

  private clearFormAndErrors() {
    this.clearForm();
    this.clearErrors();
  }

  private async submitActivity() {
    this.reset = false;
    if (!this.activity.terms) {
      return false;
    }
    const validate = await this.$validator.validateAll();
    if (!validate) {
      return false;
    }
    try {
      await this.axios({
        method: 'POST',
        url: '/activities_subscriptions',
        data: this.activity,
      });
      this.clearFormAndErrors();
    } catch (error) {
      console.log(error);
    }
  }

  get activityComponent(): string {
    const selection: number = this.activity.activity_type_selection.type;
    return this.activity_types_components[selection - 1];
  }
}
