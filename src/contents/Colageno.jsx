import img1 from '../img/Example.webp'
import img2 from '../img/colag1.jpg'
import img3 from '../img/colag2.jpg'
import img4 from '../img/colag3.jpg'
import img5 from '../img/colag4.jpg'
import { Card } from 'react-bootstrap'

const Colageno = () => {
    return (
        <div className='bg-collagen1'>
            <div >
                <div className="px-5 pt-5 bg-collagen">
                    <div className="pt-5 px-5 pb-5 row">
                        <div className='col-sm-6 pt-5 px-5'>
                            <img src={img1} alt="Colageno 1" width="100%" className='shadow rounded'/>
                        </div>
                        <div className='col-sm-6 pt-1'>
                            <h1>ACERCA DEL COLAGENO QUALY VIE</h1><br />
                            <p className="justificado">Los péptidos de colágeno también conocidos como colágeno hidrolizado son obtenidos de fuentes naturales de proteína animal bovina compuesta principalmente por colágeno tipo 1 y tipo 3.<br />
                                El proceso por el cual han sido producidos usa la última y mejor tecnología para asegurar una proteína de bajo peso molecular para una mejor biodisponibilidad y digestabilidad (mayor aprovechamiento del alimento en el organismo) con una variedad de beneficios potenciales para la salud y la belleza.<br />
                            </p>
                            <div>
                                <div className="card-body pt-5">
                                    <h5 className="card-title">Nuestro colágeno cumple con lo siguiente:</h5><br />
                                    <p className="card-text"> <ul>
                                        <li>Libre de GMO</li>
                                        <li>Rotulo limpio</li>
                                        <li>Libre de hormonas y agrotóxicos</li>
                                        <li>Libre de gluten</li>
                                        <li>Libre de grasas y carbohidratos</li>
                                        <li>No alergénico</li>
                                        <li>Sabor y olor neutros</li>
                                    </ul></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="pt-5 px-5 pb-5">
                            <p className="justificado">Nuestro colágeno se obtiene de colágeno nativo de origen animal específicamente de ganado bovino criado y alimentado en llanuras de pasto. Luego el colágeno es procesado bajo estrictos protocolos de seguridad alimenticia resultando en un producto saludable, puro y natural.<br />
                                Gracias a la fuente de materias primas y al altamente tecnológico proceso de producción, nuestro colágeno presenta una composición y concentración destacada de aminoácidos fundamentales para nuestro organismo como Glicina, Prolina e Hidroxiprolina.

                            </p>
                        </div>
                    </div>
                </div>




                <div className='mx-5'>
                    <div className="pt-5 px-5 ">
                        <h2>BENEFICIOS PARA LA SALUDO DEL CONSUMO REGULAR DE COLAGENO QUALY VIE</h2><br />
                        <p className="justificado">El colágeno es la principal proteína estructural de nuestro cuerpo presente en huesos, piel, músculos, vasos sanguíneos, tendones y ligamentos. Es la proteína más abundante en el cuerpo correspondiendo entre el 25 y hasta el 35% de nuestro cuerpo. Conforme avanza nuestra edad la producción de colágeno decrece y el colágeno existente se degrada, por consiguiente, la concentración de colágeno en nuestro cuerpo decrece exponencialmente a partir de los 25 años cuando mantenemos en promedio niveles superiores al 80% los cuales a los 40 años decrecen al 60% y a los 60 años los niveles ya son inferiores al 40%.<br />
                            Las concentraciones de colágeno en nuestro cuerpo están muy asociadas al envejecimiento de nuestro aspecto y también de nuestro desempeño ya que, el colágeno estructuralmente une nuestros tejidos dándoles elasticidad y vitalidad.
                        </p><br />
                    </div>
                    <div className="px-5">
                        <p>Los principals beneficios del consumo regular de colágeno son:</p><br />

                        <div className="row">

                            <div className="col-sm-6 pt-3">
                                <Card className='h-100 shadow'>
                                    <Card.Img src={img2} alt="Colageno" width="100%" />
                                    <Card.Body>
                                        <Card.Title>BELLEZA:</Card.Title>
                                        <Card.Text><ul>
                                            <li>Estimula al cuerpo a producir más colágeno</li>
                                            <li>Piel más elástica e hidratada</li>
                                            <li>Aumento de los efectos antioxidantes que ayudan a mantener la piel más saludable</li>
                                            <li>Ayuda al crecimiento del pelo y uñas</li>
                                        </ul></Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-6 pt-3">
                                <Card className='h-100 shadow'>
                                    <Card.Img src={img3} alt="Colageno" width="100%" />
                                    <Card.Body>
                                        <Card.Title>ARTICULACIONES:</Card.Title>
                                        <Card.Text><ul>
                                            <li>Ayuda a reducir problemas degenerativos en cartílagos</li>
                                            <li>Reduce los dolores incomodos</li>
                                            <li>Mantener articulaciones más saludables</li>
                                            <li>Mejora el desempeño de las articulaciones</li>
                                        </ul></Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-6 pt-3">
                                <Card className='h-100 shadow'>
                                    <Card.Img src={img4} alt="Colageno" width="100%" />
                                    <Card.Body>
                                        <Card.Title>HUESOS:</Card.Title>
                                        <Card.Text><ul>
                                            <li>Ayuda a la salud y el fortalecimiento óseo</li>
                                            <li>Ayuda en la reducción de la pérdida ósea</li>
                                            <li>Mejora la densidad y composición mineral del hueso</li>
                                        </ul></Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-6 pt-3">
                                <Card className='h-100 shadow'>
                                    <Card.Img src={img5} alt="Colageno" width="100%" />
                                    <Card.Body>
                                        <Card.Title>SALUD:</Card.Title>
                                        <Card.Text><ul>
                                            <li>Fuente de proteínas</li>
                                            <li>Mantener la masa magra en el cuerpo</li>
                                            <li>Mantener la sensación de saciedad</li>
                                            <li>Ayuda a la curación de heridas</li>
                                        </ul></Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                    </div>

                </div>




                <div className='mt-5 bg-collagen'>
                    <div className='mx-5 mb-5 mt-5'>
                        <div className="pt-5 px-5 pb-5 ">
                            <h1>COMO CONSUMIR EL COLAGENO QUALY VIE</h1><br />
                            <p className="justificado">Para conseguir resultados en nuestra salud gracias al consume de colágeno tenemos que hacer del consume de colágeno un hábito ya que, nuestro cuerpo está permanentemente perdiendo colágeno por la exposición a la radiación UV del sol, por el envejecimiento, por los cambios hormonales (menopausia), por la mala alimentación y déficit nutricional especialmente de Vitamina C, Zinc y cobre, por el estilo de vida poco sano (cigarro y alcohol). Por lo tanto, para combatir estos factores cotidianos debemos hacer del consume de colágeno algo cotidiano.<br />
                                La mejor forma de consumir colágeno es disolver 2 cucharadas de té (10 gr) en medio vaso de agua (100 ml) y tomarlo en ayunas. Se puede tomar con agua a de la llave a temperatura ambiente o mezclarlo en el té o café de la mañana. También se puede mezclar con lecho o yogurt. Mezclarlo con bebidas muy heladas no tienen ninguna contraindicación salvo que será un poco más difícil disolver el colágeno..<br />
                                Tomar una segunda dosis de 10 gr junto con la última comida del día también se recomienda, pero para la mayoría de las personas una dosis diaria de 10 gr debería ser más que suficiente.<br />
                                De acuerdo a estudios, los resultados visibles del consume de colágeno se van a empezar a ver a partir del tercer mes de consumo regular.
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </div>

    );
}

export default Colageno