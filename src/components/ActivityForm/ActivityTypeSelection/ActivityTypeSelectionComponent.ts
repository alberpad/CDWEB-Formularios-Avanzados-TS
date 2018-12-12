import { Component, Vue, Inject, Prop } from 'vue-property-decorator';
import Template from './ActivityTypeSelectionTemplate.vue';
import { Validator } from 'vee-validate';
import { ActivityTypeSelection, ActivityType } from '@/modules/types';

@Component({
  mixins: [Template],
})
export default class ActivityTypeSelectionComponent extends Vue {
  // En los componentes hijos hay que inyectar vee-validate de esta forma
  @Inject('$validator') public $validator!: Validator;

  @Prop({ type: Object, required: true })
  private activity_type_selection!: ActivityTypeSelection;

  private activity_types: ActivityType = [
    { id: 1, type: 'Fútbol' },
    { id: 2, type: 'Baloncesto' },
    { id: 3, type: 'Tenis' },
  ];
}
