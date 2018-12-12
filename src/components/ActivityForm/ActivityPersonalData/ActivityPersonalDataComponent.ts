import { Component, Vue, Prop, Inject } from 'vue-property-decorator';
import { UserData } from '@/modules/types';
import { Validator } from 'vee-validate';
import Template from './ActivityPersonalDataTemplate.vue';
// @ts-ignore
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

@Component({
  mixins: [Template],
  components: { Loading },
})
export default class ActivityPersonalData extends Vue {
  // En los componentes hijos hay que inyectar vee-validate de esta forma
  @Inject('$validator') public $validator!: Validator;

  @Prop({ type: Object, required: true })
  private personal_data!: UserData;
}
