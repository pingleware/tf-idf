using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace tf_idf
{
    public sealed class Helper
    {

        /// <summary>
        /// 
        /// </summary>
        /// <param name="documents"></param>
        /// <returns></returns>
        public string[] TDIDF(string documents)
        {
            List<string> topic_sentences = new List<string>();

            return topic_sentences.ToArray();
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="document"></param>
        /// <returns></returns>
        private string[] InverseDocumentFrequency(string document)
        {
            List<string> result = new List<string>();

            return result.ToArray();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="document"></param>
        /// <returns></returns>
        private string[] TermFrequency(string document)
        {
            List<string> result = new List<string>();

            return result.ToArray();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="words"></param>
        /// <returns></returns>
        private Dictionary<string,int> CountWords(string[] words)
        {
            Dictionary<string, int> dict = new Dictionary<string, int>();

            return dict;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="words"></param>
        /// <returns></returns>
        private string[] UniqueWords(string[] words)
        {
            List<string> result = new List<string>();

            return result.ToArray();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="document"></param>
        /// <returns></returns>
        private string[] Prettify(string document)
        {
            List<string> result = new List<string>();

            return result.ToArray();
        }
    }
}
